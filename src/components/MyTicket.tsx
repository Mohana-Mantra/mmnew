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
    const [ticketPrice, setTicketPrice] = useState(500); // Default ticket price
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    useEffect(() => {
        const fetchPaymentInfo = async () => {
            setLoading(true);

            try {
                // Check if the user's institution is listed in the 'institutes' table
                const { data: institute, error: instituteError } = await supabase
                    .from("institutes")
                    .select("*")
                    .eq("name", user.user_metadata?.institute_name)
                    .eq("is_listed", true)
                    .single();

                if (instituteError) {
                    console.error("Error fetching institute information:", instituteError.message);
                } else if (institute) {
                    // If the institution is listed, set the ticket price to 0
                    setTicketPrice(0);
                }

                // Fetch the user's payment information
                const { data: payments, error: paymentError } = await supabase
                    .from("payments")
                    .select("*")
                    .eq("user_id", user.id)
                    .eq("payment_status", "completed");

                if (paymentError) {
                    setErrorMessage("Error fetching payment information.");
                    console.error("Error fetching payments:", paymentError.message);
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
        // Simulate a successful payment and insert the record into the payments table
        const { data, error } = await supabase
            .from("payments")
            .insert({
                user_id: user.id,
                amount: ticketPrice,
                payment_status: "completed",
                transaction_id: `txn_${Date.now()}`, // Simulate a transaction ID
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
                    <p>Amount Paid: ₹{ticketPrice === 0 ? "Free" : ticketPrice}</p>
                    <p>Transaction ID: {`txn_${Date.now()}`}</p>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold">Mohana Mantra Event Pass</h2>
                    <p>The pass price is ₹{ticketPrice === 0 ? "Free" : ticketPrice}.</p>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white mt-4 p-2 rounded-md"
                        onClick={handlePayment}
                    >
                        {ticketPrice === 0 ? "Get Free Pass" : `Buy Pass for ₹${ticketPrice}`}
                    </button>
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </div>
            )}
        </div>
    );
};

export default MyTicket;
