import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { User } from '@supabase/supabase-js';
import { IconLoader2 } from '@tabler/icons-react';

interface Event {
  name: string;
  category: string;
  description?: string;
  day: number;
}

interface UserData {
  user_id: string;
  is_eligible_for_free_pass: boolean;
}

interface Payment {
  user_id: string;
  payment_status: string;
}

const EventList = ({ user }: { user: User }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventsByCategory, setEventsByCategory] = useState<{ [category: string]: Event[] }>({});
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [canSelectEvents, setCanSelectEvents] = useState(false);
  const [showEventSelection, setShowEventSelection] = useState(false); // Toggle event selection list
  const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch user data
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('user_id, is_eligible_for_free_pass')
          .eq('email', user.email)
          .single();

        if (userError || !userData) {
          setErrorMessage('Error fetching user data.');
          setLoading(false);
          return;
        }

        setUserData(userData);

        // Check eligibility
        if (userData.is_eligible_for_free_pass) {
          setCanSelectEvents(true);
        } else {
          // Check if the user has made a payment with status "paid"
          const { data: paymentData, error: paymentError } = await supabase
            .from('payments')
            .select('payment_status')
            .eq('user_id', userData.user_id)
            .eq('payment_status', 'paid')
            .single();

          if (paymentError || !paymentData) {
            setCanSelectEvents(false);
          } else {
            setCanSelectEvents(true);
          }
        }

        // Fetch all events
        const { data: eventsData, error: eventsError } = await supabase
          .from('events')
          .select('*')
          .order('day', { ascending: true });

        if (eventsError) {
          setErrorMessage('Error fetching events.');
        } else {
          setEvents(eventsData);

          // Group events by category
          const groupedEvents: { [category: string]: Event[] } = {};
          eventsData.forEach((event: Event) => {
            if (!groupedEvents[event.category]) {
              groupedEvents[event.category] = [];
            }
            groupedEvents[event.category].push(event);
          });
          setEventsByCategory(groupedEvents);
        }

        // Fetch user's existing participation data
        const { data: participationData, error: participationError } = await supabase
          .from('participations')
          .select('selected_events')
          .eq('user_id', userData.user_id)
          .single();

        if (participationError || !participationData) {
          setSelectedEvents([]); // No selections made yet
        } else {
          setSelectedEvents(participationData.selected_events || []);
        }
      } catch (error) {
        setErrorMessage('An unexpected error occurred.');
      }
      setLoading(false);
    };

    fetchData();
  }, [user.email]);

  const handleEventSelection = (eventName: string) => {
    if (selectedEvents.includes(eventName)) {
      setSelectedEvents(selectedEvents.filter((name) => name !== eventName));
    } else {
      setSelectedEvents([...selectedEvents, eventName]);
    }
  };

  const handleSubmit = async () => {
    if (!userData) {
      setErrorMessage('User data not available.');
      return;
    }

    try {
      // Insert or update participation
      const { error } = await supabase
        .from('participations')
        .upsert({
          user_id: userData.user_id,
          selected_events: selectedEvents, // Store the selected events in the array
        });

      if (error) {
        setErrorMessage('Error submitting participation.');
      } else {
        setErrorMessage('Participation updated successfully!');
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred.');
    }
  };

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <IconLoader2 className="animate-spin h-12 w-12" />
      </div>
    );
  }

  if (!canSelectEvents) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold">Access Denied</h2>
        <p className="mt-4">
          You need to purchase a pass or be eligible for a free pass to select events.
        </p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Select Your Events</h2>
      {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}

      {!showEventSelection ? (
        <div className="text-center">
          <button
            onClick={() => setShowEventSelection(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            {selectedEvents.length > 0 ? 'Update Participation' : 'Select Events'}
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.keys(eventsByCategory).map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-center mb-2">{category}</h3>
              <hr className="mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventsByCategory[category].map((event) => (
                  <div key={event.name} className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-medium">{event.name}</h4>
                        <p className="text-sm text-gray-500">Day {event.day}</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          checked={selectedEvents.includes(event.name)}
                          onChange={() => handleEventSelection(event.name)}
                          className="h-5 w-5 text-blue-600"
                        />
                      </div>
                    </div>
                    {event.description && <p className="mt-2 text-gray-700">{event.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedEvents.length > 0 && (
        <div className="mt-8 text-center">
          <h3 className="text-lg font-bold mb-2">Selected Events:</h3>
          <ul className="mb-4">
            {selectedEvents.map((event) => (
              <li key={event} className="text-gray-700">{event}</li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            {selectedEvents.length > 0 ? 'Update Participation' : 'Submit Participation'}
          </button>
        </div>
      )}
    </div>
  );
};

export default EventList;
