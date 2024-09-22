import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { IconLoader2 } from "@tabler/icons-react";

interface Payment {
    id: number;
    user_id: string;
    amount: number;
    payment_status: string;
    payment_id: string;
    created_at: string;
}

const MyPayment = ({
    user,
    changeTab,
}: {
    user: User;
    changeTab: (tab: 0 | 1 | 2 | 3) => void;
}) => {
    const [payment, setPayment] = useState<Payment | null>(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchPaymentInfo = async () => {
            setLoading(true);
            try {
                const { data: payment, error } = await supabase
                    .from("payments")
                    .select("*")
                    .eq("user_id", user.id) // Fetch payment based on user_id
                    .eq("payment_status", "paid") // Only select completed payments
                    .single();

                if (error) {
                    // Handle case where no payment is found
                    setErrorMessage("No transaction found.");
                    console.error("Error fetching payments:", error.message);
                } else {
                    setPayment(payment); // Set the payment data in state
                }
            } catch (error) {
                setErrorMessage("An unexpected error occurred.");
                console.error("Unexpected error:", error);
            }
            setLoading(false);
        };

        fetchPaymentInfo();
    }, [user.id]);

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
                // If user has purchased the pass, show receipt details
                <div className="flex flex-col items-center py-16 gap-3 text-center">
                    <h2 className="text-2xl font-bold">Payment Receipt</h2>
                    <p>Thank you for registering for the event.</p>
                    <p>Amount Paid: ₹{payment.amount}</p>
                    <p>Payment ID: {payment.payment_id}</p>
                    <p>Payment Date: {new Date(payment.created_at).toLocaleString()}</p>
                </div>
            ) : (
                // If no transaction found, prompt the user to register
                <div className="flex flex-col items-center py-16 gap-3 text-center">
                    <h2 className="text-2xl font-bold">Register for the Event</h2>
                    <p>No transaction found. Please register for the event.</p>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white mt-4 p-2 rounded-md"
                        onClick={() => changeTab(1)} // Redirect to registration tab
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
