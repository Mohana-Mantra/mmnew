import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { IconLoader2 } from "@tabler/icons-react";

const MyTicket = ({ user }: { user: User }) => {
  const [ticketPurchased, setTicketPurchased] = useState(false);
  const [ticketPrice, setTicketPrice] = useState(500); // Default ticket price
  const [isEligibleForFreePass, setIsEligibleForFreePass] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [transactionId, setTransactionId] = useState<string | null>(null); // Track transaction ID
  const router = useRouter();

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      setLoading(true);

      try {
        // Fetch the user details to check if they are eligible for a free pass
        const { data: userData, error: userError } = await supabase
          .from("users")
          .select("is_eligible_for_free_pass")
          .eq("id", user.id)
          .single();

        if (userError) {
          console.error("Error fetching user data:", userError.message);
        } else if (userData?.is_eligible_for_free_pass) {
          // If the user is eligible, set the ticket price to 0 and disable the payment button
          setIsEligibleForFreePass(true);
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

  const handlePaymentSuccess = async () => {
    const txnId = `txn_${Date.now()}`; // Generate transaction ID
    const { data, error } = await supabase.from("payments").insert({
      user_id: user.id,
      amount: ticketPrice,
      payment_status: "completed",
      transaction_id: txnId, // Use the generated transaction ID
      created_at: new Date().toISOString(),
    });

    if (error) {
      setErrorMessage("Error processing payment.");
    } else {
      setTransactionId(txnId); // Save the transaction ID in state
      setTicketPurchased(true);
      router.push("/account"); // Redirect to the account page
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadRazorpayScript(); // Load the Razorpay script when the component mounts
  }, []);

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <IconLoader2 className="animate-spin h-12 aspect-square" />
      </div>
    );
  }

  return (
    <div>
      {ticketPurchased ? (
        <div className="text-center flex flex-col items-center">
          <h2 className="text-2xl font-bold">Your Mohana Mantra Pass</h2>
          <p>Congratulations! You have successfully purchased the event pass.</p>
          <p>Amount Paid: ₹{ticketPrice === 0 ? "Free" : ticketPrice}</p>
          {transactionId && <p>Transaction ID: {transactionId}</p>}
        </div>
      ) : (
        <div className="text-center flex flex-col gap-3 items-center py-16">
          <h2 className="text-3xl font-bold">Mohana Mantra Event Pass</h2>
          {isEligibleForFreePass ? (
            <p className="text-green-500">You are eligible for a free pass!</p>
          ) : (
            <p>The pass price is ₹{ticketPrice}.</p>
          )}
          {isEligibleForFreePass ? (
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white mt-4 p-2 rounded-md"
              onClick={handlePaymentSuccess}
            >
              Get Free Pass
            </button>
          ) : (
            <div className="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_OyuHRL0d2Kenle/view" data-text="Buy Your Pass" data-color="#528FF0" data-size="medium">
              
            </div>
          )}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default MyTicket;
