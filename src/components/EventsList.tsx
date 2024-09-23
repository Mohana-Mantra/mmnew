import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { IconLoader2 } from "@tabler/icons-react";
import dayjs from "dayjs";

interface Event {
  id: number;
  event_name: string;
  category: string;
}

interface EventCategory {
  category: string;
  events: Event[];
}

interface UserData {
  id: string;
  is_eligible_for_free_pass: boolean;
}

interface Payment {
  id: number;
  user_id: string;
  amount: number;
  payment_status: string;
  payment_id: string;
  created_at: string;
}

export default function EventList({ user }: { user: User }) {
  const [eventsByCategory, setEventsByCategory] = useState<EventCategory[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false); // Whether the user can register for events
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [canUpdate, setCanUpdate] = useState(true);
  const router = useRouter();

  const today = dayjs();
  const updateDeadline = dayjs("2024-10-01");

  useEffect(() => {
    // Check if the user can still update selections
    if (today.isAfter(updateDeadline)) {
      setCanUpdate(false);
    }
  }, [today]);

  // Check if the user has access (either by paying or being eligible for a free pass)
  useEffect(() => {
    const checkAccess = async () => {
      try {
        // Fetch user details
        const { data: userData, error: userError } = await supabase
          .from("users")
          .select("id, is_eligible_for_free_pass")
          .eq("id", user.id)
          .single();

        if (userError || !userData) {
          console.error("Error fetching user data:", userError?.message);
          setErrorMessage("Error fetching user data.");
          setIsLoading(false);
          return;
        }

        console.log("User Data:", userData); // Debugging

        const userId = userData.id;

        // Check if the user is eligible for a free pass
        if (userData.is_eligible_for_free_pass) {
          setHasAccess(true);
        } else {
          // Check if the user has made a successful payment
          const { data: payments, error: paymentError } = await supabase
            .from("payments")
            .select("*")
            .eq("user_id", userId)
            .eq("payment_status", "paid");

          if (paymentError) {
            console.error("Error fetching payment data:", paymentError.message);
            setErrorMessage("Error fetching payment data.");
            setIsLoading(false);
            return;
          }

          console.log("Payments Data:", payments); // Debugging

          if (payments && payments.length > 0) {
            setHasAccess(true);
          } else {
            setHasAccess(false);
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error("An unexpected error occurred:", error);
        setErrorMessage("An unexpected error occurred.");
        setIsLoading(false);
      }
    };

    checkAccess();
  }, [user.id]);

  // Fetch events and user's selected events if the user has access
  useEffect(() => {
    if (hasAccess) {
      const fetchEvents = async () => {
        const { data: events, error } = await supabase
          .from("events")
          .select("id, event_name, category")
          .order("category", { ascending: true })
          .order("event_name", { ascending: true });

        if (error) {
          console.error("Error fetching events:", error.message);
          return;
        }

        // Group events by category
        const groupedEvents = events.reduce((acc: EventCategory[], event: Event) => {
          let category = acc.find((cat) => cat.category === event.category);
          if (category) {
            category.events.push(event);
          } else {
            acc.push({ category: event.category, events: [event] });
          }
          return acc;
        }, []);

        setEventsByCategory(groupedEvents);
      };

      const fetchUserEvents = async () => {
        const { data: userEvents, error } = await supabase
          .from("user_events")
          .select("event_name")
          .eq("user_id", user.id);

        if (error) {
          console.error("Error fetching user events:", error.message);
        } else {
          setSelectedEvents(userEvents.map((event) => event.event_name));
        }
      };

      fetchEvents();
      fetchUserEvents();
    }
  }, [hasAccess, user.id]);

  const handleEventSelection = (eventName: string) => {
    if (selectedEvents.includes(eventName)) {
      setSelectedEvents(selectedEvents.filter((event) => event !== eventName));
    } else {
      setSelectedEvents([...selectedEvents, eventName]);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Remove old entries for this user
      const { error: deleteError } = await supabase
        .from("user_events")
        .delete()
        .eq("user_id", user.id);

      if (deleteError) {
        console.error("Error clearing previous selections:", deleteError.message);
        throw new Error("Error clearing previous selections.");
      }

      // Insert new selections
      const eventEntries = selectedEvents.map((eventName) => ({
        user_id: user.id,
        event_name: eventName,
        updated_at: new Date().toISOString(),
      }));

      if (eventEntries.length === 0) {
        throw new Error("Please select at least one event.");
      }

      console.log("Selected events for insertion: ", eventEntries); // Debugging log

      const { error: insertError } = await supabase.from("user_events").insert(eventEntries);

      if (insertError) {
        console.error("Error saving event selections:", insertError.message);
        throw new Error("Error saving event selections.");
      }

      setSuccessMessage("Your event selections have been updated!");
    } catch (error: any) {
      console.error("Submission error:", error.message); // Debugging log
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isEventSelected = (eventName: string) => selectedEvents.includes(eventName);

  // Show loading indicator while checking access
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <IconLoader2 className="animate-spin h-12 w-12" />
      </div>
    );
  }

  // Show message if user doesn't have access (redirect to MyPayment.tsx)
  if (!hasAccess) {
    return (
      <div className="max-w-2xl mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Register for Events</h1>
        <p className="text-lg">
          To register for events, please purchase an event pass or check your eligibility.
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4"
          onClick={() => router.push("/account?tab=my-ticket")} // Redirect to MyPayment.tsx
        >
          Purchase Event Pass
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Register for Events</h1>

      {errorMessage && (
        <div className="p-4 mb-4 text-red-800 bg-red-200 border border-red-300 rounded">
          {errorMessage}
        </div>
      )}

      {successMessage && (
        <div className="p-4 mb-4 text-green-800 bg-green-200 border border-green-300 rounded">
          {successMessage}
        </div>
      )}

      <form onSubmit={(e) => e.preventDefault()}>
        {eventsByCategory.map((category) => (
          <div key={category.category} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{category.category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.events.map((event) => (
                <label key={event.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isEventSelected(event.event_name)}
                    onChange={() => handleEventSelection(event.event_name)}
                    disabled={!canUpdate} // Disable selection if past deadline
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className={`text-sm ${!canUpdate ? "text-gray-500" : ""}`}>
                    {event.event_name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {canUpdate ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <IconLoader2 className="animate-spin h-5 w-5 mx-auto" />
            ) : (
              "Submit"
            )}
          </button>
        ) : (
          <div className="text-center text-red-500">
            Event registration is closed after October 1, 2024.
          </div>
        )}
      </form>

      <div className="mt-8 text-center">
        <p>You can update your selections until October 1, 2024.</p>
      </div>
    </div>
  );
}
