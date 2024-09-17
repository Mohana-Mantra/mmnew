import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

interface Payment {
    id: number;
    user_id: string;
    amount: number;
    payment_status: string;
    transaction_id: string;
    created_at: string;
}

const MyPayment = ({ user }: { user: User }) => {
    const [payment, setPayment] = useState<Payment | null>(null);
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
                    .eq("payment_status", "completed")
                    .limit(1)
                    .single();

                if (error) {
                    setErrorMessage("Error fetching payment information.");
                    console.error("Error fetching payments:", error.message);
                } else {
                    setPayment(payments); // User has purchased a pass
                }
            } catch (error) {
                setErrorMessage("An unexpected error occurred.");
            }
            setLoading(false);
        };

        fetchPaymentInfo();
    }, [user.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {payment ? (
                // If user has purchased the pass, show receipt details
                <div>
                    <h2 className="text-2xl font-bold">Payment Receipt</h2>
                    <p>Thank you for registering for the Mohana Mantra 2K24 event.</p>
                    <p>Amount Paid: ₹{payment.amount}</p>
                    <p>Transaction ID: {payment.transaction_id}</p>
                    <p>Payment Date: {new Date(payment.created_at).toLocaleString()}</p>
                </div>
            ) : (
                // If user has not purchased the pass, prompt them to do so
                <div>
                    <h2 className="text-2xl font-bold">Register for Mohana Mantra 2K24</h2>
                    <p>
                        You haven&#39;t registered for the Mohana Mantra 2K24 event yet. Purchase the event pass to participate.
                    </p>
                    <button
                        className="bg-#fecb00 text-black mt-4 p-2 rounded-md"
                        onClick={() => router.push("/account/myticket")}
                    >
                        Purchase Pass and Register
                    </button>
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </div>
            )}
        </div>
    );
};

export default MyPayment;
