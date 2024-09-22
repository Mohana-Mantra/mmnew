import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { IconLoader2 } from "@tabler/icons-react";

// Define the structure of the Payment object
interface Payment {
    id: number;
    user_id: string;
    amount: number;
    payment_status: string;
    payment_id: string;
    created_at: string;
}

const MyPayment = ({
    userId, // Receive userId from the parent component (UserDetails.tsx)
    changeTab, // Function to switch between tabs (e.g., for registration)
}: {
    userId: string;
    changeTab: (tab: 0 | 1 | 2 | 3) => void;
}) => {
    const [payment, setPayment] = useState<Payment | null>(null); // Store payment details
    const [loading, setLoading] = useState(true); // Loading state while fetching data
    const [errorMessage, setErrorMessage] = useState(""); // Store error message if any

    useEffect(() => {
        const fetchPaymentInfo = async () => {
            setLoading(true);
            console.log("Fetching payment info for user_id:", userId); // Debugging

            try {
                // Fetch payment details for the user from the payments table
                const { data: paymentData, error } = await supabase
                    .from('payments')
                    .select('*')
                    .eq('user_id', userId) // Filter by user_id
                    .eq('payment_status', 'paid') // Only fetch paid payments
                    .single(); // Expect only a single payment record

                if (error || !paymentData) {
                    // If no payment found, show the error message
                    setErrorMessage("No transaction found for this user.");
                    console.error("Error fetching payments:", error?.message);
                } else {
                    // Set the payment details in state
                    setPayment(paymentData);
                }
            } catch (error) {
                // Handle any unexpected errors
                setErrorMessage("An unexpected error occurred.");
                console.error("Unexpected error:", error);
            }
            setLoading(false); // Stop the loading spinner
        };

        fetchPaymentInfo(); // Call the function to fetch payment info
    }, [userId]);

    // Show a loading spinner while fetching data
    if (loading) {
        return (
            <div className="h-full w-full flex items-center justify-center">
                <IconLoader2 className="animate-spin h-12 aspect-square" />
            </div>
        );
    }

    return (
        <div>
            {payment ? (
                // Display payment receipt details if a transaction is found
                <div className="flex flex-col items-center py-16 gap-3 text-center">
                    <h2 className="text-2xl font-bold">Payment Receipt</h2>
                    <p>Thank you for registering for the Mohana Mantra 2K24 event.</p>
                    <p><strong>Amount Paid:</strong> ₹{payment.amount}</p>
                    <p><strong>Payment ID:</strong> {payment.payment_id}</p>
                    <p><strong>Payment Date:</strong> {new Date(payment.created_at).toLocaleString()}</p>
                </div>
            ) : (
                // If no transaction found, show the register button and message
                <div className="flex flex-col items-center py-16 gap-3 text-center">
                    <h2 className="text-2xl font-bold">Register for Mohana Mantra 2K24</h2>
                    <p>No transaction found. Please register for the event.</p>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white mt-4 p-2 rounded-md"
                        onClick={() => changeTab(1)} // Trigger registration tab when clicked
                    >
                        Register Now
                    </button>

                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </div>
            )}
        </div>
    );
};

export default MyPayment;
