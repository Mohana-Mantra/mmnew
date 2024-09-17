import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

interface Payment {
    id: number;
    user_id: string;
    amount: number;
    payment_status: string;
}

const MyTicket = ({ user }: { user: User }) => {
    const [ticketPurchased, setTicketPurchased] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    useEffect(() => {
        const fetchPaymentInfo = async () => {
            setLoading(true);
            try {
                const { data: payments, error } = await supabase
                    .from("payments")
                    .select("*")
                    .eq("user_id", user.id)
                    .eq("payment_status", "completed");

                if (error) {
                    setErrorMessage("Error fetching payment information.");
                    console.error("Error fetching payments:", error.message);
                } else if (payments && payments.length > 0) {
                    setTicketPurchased(true); // User has purchased a ticket
                }
            } catch (error) {
                setErrorMessage("An unexpected error occurred.");
            }
            setLoading(false);
        };

        fetchPaymentInfo();
    }, [user.id]);

    const handlePayment = async () => {
        // You would integrate a payment gateway like Razorpay here.
        // For now, let's simulate a successful payment and insert the record into the payments table.

        const { data, error } = await supabase
            .from("payments")
            .insert({
                user_id: user.id,
                amount: 500,
                payment_status: "completed",
                transaction_id: `txn_${Date.now()}`, // Simulating a transaction ID
                created_at: new Date().toISOString(),
            });

        if (error) {
            setErrorMessage("Error processing payment.");
        } else {
            setTicketPurchased(true);
            router.push("/account"); // Redirect to the account page or reload the current page
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {ticketPurchased ? (
                <div>
                    <h2 className="text-2xl font-bold">Your Mohana Mantra Pass</h2>
                    <p>Congratulations! You have successfully purchased the event pass.</p>
                    <p>Amount Paid: ₹500</p>
                    <p>Transaction ID: {`txn_${Date.now()}`}</p>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold">Mohana Mantra Event Pass</h2>
                    <p>The pass price is ₹500.</p>
                    <button
                        className="bg-yellow mt-4 p-2 rounded-md"
                        onClick={handlePayment}
                    >
                        Buy Pass for ₹500
                    </button>
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </div>
            )}
        </div>
    );
};

export default MyTicket;
