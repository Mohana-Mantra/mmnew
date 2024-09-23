import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { IconLoader2 } from "@tabler/icons-react";

interface UserExtended extends User {
    user_id?: string;
}

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
    changeTab: (tab: 0 | 1 | 2 | 3 | 4) => void;
}) => {
    const [payment, setPayment] = useState<Payment | null>(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserAndPaymentInfo = async () => {
            setLoading(true);
            try {
                // Step 1: Fetch user details from the 'users' table
                const { data: userData, error: userError } = await supabase
                    .from("users")
                    .select("*")
                    .eq("email", user.email)
                    .single();

                if (userError || !userData) {
                    setErrorMessage("Error fetching user details.");
                    console.error("Error fetching user details:", userError?.message);
                    setLoading(false);
                    return;
                }

                // Store the user_id from the 'users' table
                const userIdFromTable = userData.user_id;
                setUserId(userIdFromTable);

                // Step 2: Fetch payment details from the 'payments' table using user_id
                const { data: paymentData, error: paymentError } = await supabase
                    .from("payments")
                    .select("*")
                    .eq("user_id", userIdFromTable)
                    .eq("payment_status", "paid")
                    .single();

                if (paymentError || !paymentData) {
                    // Handle case where no payment is found
                    setErrorMessage("No transaction found for this user.");
                    console.error("Error fetching payments:", paymentError?.message);
                } else {
                    // Set the payment details in state
                    setPayment(paymentData);
                }
            } catch (error) {
                setErrorMessage("An unexpected error occurred.");
                console.error("Unexpected error:", error);
            }
            setLoading(false);
        };

        fetchUserAndPaymentInfo();
    }, [user.email]);

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
                    <p>Thank you for registering for the Mohana Mantra 2K24 event.</p>
                    <p>
                        <strong>Amount Paid:</strong> ₹{payment.amount}
                    </p>
                    <p>
                        <strong>Payment ID:</strong> {payment.payment_id}
                    </p>
                    <p>
                        <strong>Payment Date:</strong>{" "}
                        {new Date(payment.created_at).toLocaleString()}
                    </p>
                </div>
            ) : (
                // If no transaction found, prompt the user to register
                <div className="flex flex-col items-center py-16 gap-3 text-center">
                    <h2 className="text-2xl font-bold">Register for Mohana Mantra 2K24</h2>
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
