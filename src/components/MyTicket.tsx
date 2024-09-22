import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { IconLoader2 } from "@tabler/icons-react";
import MyPayment from "./MyPayment"; // Import MyPayment component for non-free users

// Define the Razorpay payment response type
interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

interface UserExtended extends User {
  user_id?: string;
  full_name?: string;
  phone_number?: number | string;
  institute_name?: string;
  year_of_study?: number;
  is_verified?: boolean;
  is_eligible_for_free_pass?: boolean;
}

const MyTicket = ({ user }: { user: User }) => {
  const [ticketPurchased, setTicketPurchased] = useState(false);
  const [ticketPrice, setTicketPrice] = useState(500); // Default ticket price
  const [isEligibleForFreePass, setIsEligibleForFreePass] = useState(false); // Free pass eligibility
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [transactionId, setTransactionId] = useState<string | null>(null); // Track transaction ID
  const router = useRouter();

  useEffect(() => {
    const fetchUserInfo = async () => {
      setLoading(true);

      try {
        // Fetch user details to check if they are eligible for a free pass
        const { data: userData, error: userError } = await supabase
          .from("users")
          .select("is_eligible_for_free_pass")
          .eq("id", user.id)
          .single();

        if (userError || !userData) {
          console.error("Error fetching user data:", userError?.message);
        } else if (userData.is_eligible_for_free_pass) {
          // If the user is eligible for a free pass
          setIsEligibleForFreePass(true);
          setTicketPrice(0);
        } else {
          // If not eligible, proceed to show payment options
          setIsEligibleForFreePass(false);
        }

        // Check if the user has already completed the payment
        const { data: payments, error: paymentError } = await supabase
          .from("payments")
          .select("*")
          .eq("user_id", user.id)
          .eq("payment_status", "paid");

        if (paymentError) {
          setErrorMessage("Error fetching payment information.");
          console.error("Error fetching payments:", paymentError.message);
        } else if (payments && payments.length > 0) {
          setTicketPurchased(true); // If a ticket is already purchased
        }
      } catch (error) {
        setErrorMessage("An unexpected error occurred.");
        console.error("Unexpected error:", error);
      }

      setLoading(false);
    };

    fetchUserInfo();
  }, [user.id]);

  const handlePaymentSuccess = async (paymentResponse: RazorpayPaymentResponse) => {
    const txnId = paymentResponse.razorpay_payment_id; // Razorpay payment ID

    // Insert payment record into Supabase
    const { data, error } = await supabase.from("payments").insert({
      user_id: user.id,
      amount: ticketPrice,
      payment_status: "paid",
      payment_id: txnId,
      created_at: new Date().toISOString(),
    });

    if (error) {
      setErrorMessage("Error processing payment.");
    } else {
      setTransactionId(txnId); // Save the transaction ID in state
      setTicketPurchased(true);
      router.push("/account"); // Redirect to account page
    }
  };

  const handleRazorpayPayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      setErrorMessage("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_live_JXXvFjARDIcDEl", // Replace with your Razorpay API key
      amount: ticketPrice * 100, // Convert price to paise (1 INR = 100 paise)
      currency: "INR",
      name: "Mohana Mantra",
      description: "Event Pass",
      handler: handlePaymentSuccess,
      prefill: {
        name: user.user_metadata?.full_name || "Guest",
        email: user.email,
      },
      theme: {
        color: "#528FF0",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
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
    loadRazorpayScript(); // Load the Razorpay script on component mount
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
      {isEligibleForFreePass ? (
        // User is eligible for free pass
        <div className="text-center flex flex-col items-center py-16">
          <h2 className="text-2xl font-bold">Mohana Mantra Event Pass</h2>
          <p className="text-green-500">Congratulations! You are eligible for a free pass!</p>
          <p>You don’t need to make any payment. Enjoy the event!</p>
        </div>
      ) : (
        // User is not eligible for a free pass and needs to purchase a ticket
        <div className="text-center flex flex-col gap-3 items-center py-16">
          <h2 className="text-2xl font-bold">Mohana Mantra Event Pass</h2>
          {ticketPurchased ? (
            <>
              <p>Thank you! You have successfully purchased the event pass.</p>
              <p>Payment was successful. You can view your payment details in the MyPayment section.</p>
            </>
          ) : (
            <>
              <p>The pass price is ₹{ticketPrice}.</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white mt-4 p-2 rounded-md"
                onClick={handleRazorpayPayment}
              >
                Proceed to Payment
              </button>
              {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MyTicket;
