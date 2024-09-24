import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { User } from '@supabase/supabase-js';
import { IconLoader2 } from '@tabler/icons-react';

interface Event {
  id: string;
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
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [canSelectEvents, setCanSelectEvents] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const checkEligibility = async () => {
      setLoading(true);
      try {
        // Fetch user data from the users table
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('user_id, is_eligible_for_free_pass')
          .eq('email', user.email)
          .single();

        if (userError || !userData) {
          setErrorMessage('Error fetching user data.');
          console.error('Error fetching user data:', userError?.message);
          setLoading(false);
          return;
        }

        setUserData(userData);

        // Check if the user is eligible for a free pass
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

        // Fetch all events from the events table
        const { data: eventsData, error: eventsError } = await supabase
          .from('events')
          .select('*')
          .order('day', { ascending: true });

        if (eventsError) {
          setErrorMessage('Error fetching events.');
          console.error('Error fetching events:', eventsError.message);
        } else {
          setEvents(eventsData as Event[]);
        }
      } catch (error) {
        setErrorMessage('An unexpected error occurred.');
        console.error('Unexpected error:', error);
      }
      setLoading(false);
    };

    checkEligibility();
  }, [user.email]);

  const handleEventSelection = (eventId: string) => {
    if (selectedEvents.includes(eventId)) {
      setSelectedEvents(selectedEvents.filter((id) => id !== eventId));
    } else {
      setSelectedEvents([...selectedEvents, eventId]);
    }
  };

  const handleSubmit = async () => {
    if (!userData) {
      setErrorMessage('User data not available.');
      return;
    }

    try {
      // Insert participation records into the participations table
      const participations = selectedEvents.map((eventId) => ({
        user_id: userData.user_id,
        event_id: eventId,
      }));

      const { error } = await supabase.from('participations').insert(participations);

      if (error) {
        setErrorMessage('Error submitting participation.');
        console.error('Error submitting participation:', error.message);
      } else {
        setErrorMessage('Participation submitted successfully!');
        setSelectedEvents([]); // Reset selection after successful submission
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred.');
      console.error('Unexpected error:', error);
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
      <div className="flex flex-col space-y-6">
        {events.map((event) => (
          <div key={event.id} className="border rounded-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <p className="text-sm text-gray-500">{event.category} - Day {event.day}</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={selectedEvents.includes(event.id)}
                  onChange={() => handleEventSelection(event.id)}
                  className="h-5 w-5 text-blue-600"
                />
              </div>
            </div>
            {event.description && <p className="mt-2 text-gray-700">{event.description}</p>}
          </div>
        ))}
      </div>
      {selectedEvents.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Submit Participation
          </button>
        </div>
      )}
    </div>
  );
};

export default EventList;
