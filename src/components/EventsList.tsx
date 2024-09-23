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

export default function EventList({ user }: { user: User }) {
  const [eventsByCategory, setEventsByCategory] = useState<EventCategory[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [canUpdate, setCanUpdate] = useState(true);
  const router = useRouter();

  const today = dayjs();
  const updateDeadline = dayjs("2024-10-01");

  useEffect(() => {
    if (today.isAfter(updateDeadline)) {
      setCanUpdate(false);
    }
  }, [today]);

  // Check if the user has access (either by paying or being eligible for a free pass)
  useEffect(() => {
    const checkAccess = async () => {
      try {
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

        const userId = userData.id;

        if (userData.is_eligible_for_free_pass) {
          setHasAccess(true);
        } else {
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
        // Define the event data directly here
        const eventCategories: EventCategory[] = [
          {
            category: "Spot Events",
            events: [
              { id: 1, event_name: "LUCKY DRAW", category: "Spot Events" },
              { id: 2, event_name: "DIGITAL EVENTS", category: "Spot Events" },
              { id: 3, event_name: "FOOD CHALLENGE", category: "Spot Events" },
              { id: 4, event_name: "BOX CRICKET", category: "Spot Events" },
              { id: 5, event_name: "RING TOSS", category: "Spot Events" },
              { id: 6, event_name: "ESCAPE THE ROOM", category: "Spot Events" },
              { id: 7, event_name: "TREASURE HUNT", category: "Spot Events" },
            ],
          },
          {
            category: "Kalakshetra",
            events: [
              { id: 8, event_name: "Lets Nacho", category: "Kalakshetra" },
              { id: 9, event_name: "Voice of MM", category: "Kalakshetra" },
              { id: 10, event_name: "Band Battle", category: "Kalakshetra" },
              { id: 11, event_name: "Ramp Walk", category: "Kalakshetra" },
              { id: 12, event_name: "Picture perfection", category: "Kalakshetra" },
              { id: 13, event_name: "Hall of Game", category: "Kalakshetra" },
              { id: 14, event_name: "Chicken Dinner", category: "Kalakshetra" },
              { id: 15, event_name: "Ultimate Battle", category: "Kalakshetra" },
            ],
          },
          {
            category: "Technoholic & Workshop",
            events: [
              { id: 16, event_name: "Hackathon (3,4,5 Oct)", category: "Technoholic & Workshop" },
              { id: 17, event_name: "3D- Design, Modeling & Development (4,5 Oct)", category: "Technoholic & Workshop" },
              { id: 18, event_name: "AR & VR Workshop (4,5 Oct)", category: "Technoholic & Workshop" },
              { id: 19, event_name: "Tech exhibition (Day-1 Morning)", category: "Technoholic & Workshop" },
              { id: 20, event_name: "Code sprint (Day-1 Morning)", category: "Technoholic & Workshop" },
              { id: 21, event_name: "Life Saver Workshop (Day-1 Morning)", category: "Technoholic & Workshop" },
              { id: 22, event_name: "Workshop on Embedded system & VLSI (Day-1 Morning)", category: "Technoholic & Workshop" },
              { id: 23, event_name: "Quizonomics (Day-1 Afternoon)", category: "Technoholic & Workshop" },
              { id: 24, event_name: "Virtual Modeling (Day-2 Morning)", category: "Technoholic & Workshop" },
              { id: 25, event_name: "Find Flag Without Lag (Day-2 Morning)", category: "Technoholic & Workshop" },
              { id: 26, event_name: "Robo War (Day-2 Morning)", category: "Technoholic & Workshop" },
              { id: 27, event_name: "Brevity Blitz (Day-2 Morning)", category: "Technoholic & Workshop" },
              { id: 28, event_name: "Bridge-o-Mania (Day-2 Afternoon)", category: "Technoholic & Workshop" },
              { id: 29, event_name: "Spell Quest (Day-2 Afternoon)", category: "Technoholic & Workshop" },
            ],
          },
        ];

        setEventsByCategory(eventCategories);
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

      const { error: insertError } = await supabase.from("user_events").insert(eventEntries);

      if (insertError) {
        console.error("Error saving event selections:", insertError.message);
        throw new Error("Error saving event selections.");
      }

      setSuccessMessage("Your event selections have been updated!");
    } catch (error: any) {
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isEventSelected = (eventName: string) => selectedEvents.includes(eventName);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <IconLoader2 className="animate-spin h-12 w-12" />
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="max-w-2xl mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Register for Events</h1>
        <p className="text-lg">To register for events, please purchase an event pass.</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4"
          onClick={() => router.push("/account?tab=my-ticket")}
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
          <div className="text-center text-red-500">Event registration is closed after October 1, 2024.</div>
        )}
      </form>

      <div className="mt-8 text-center">
        <p>You can update your selections until October 1, 2024.</p>
      </div>
    </div>
  );
}
