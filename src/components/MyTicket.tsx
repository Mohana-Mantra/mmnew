import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { IconLoader2 } from "@tabler/icons-react";

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
          .select("user_id, is_eligible_for_free_pass")
          .eq("email", user.email)
          .single();

        if (userError) {
          console.error("Error fetching user data:", userError.message);
        } else if (userData?.is_eligible_for_free_pass) {
          // User is eligible for a free pass
          setIsEligibleForFreePass(true);
          setTicketPurchased(true); // Consider ticket purchased for free pass users
        } else {
          setIsEligibleForFreePass(false);

          // Fetch the user's payment information
          const { data: payments, error: paymentError } = await supabase
            .from("payments")
            .select("*")
            .eq("user_id", userData.user_id)
            .eq("payment_status", "paid");

          if (paymentError) {
            setErrorMessage("Error fetching payment information.");
            console.error("Error fetching payments:", paymentError.message);
          } else if (payments && payments.length > 0) {
            setTicketPurchased(true); // User has purchased a ticket
          }
        }
      } catch (error) {
        setErrorMessage("An unexpected error occurred.");
        console.error("Error:", error);
      }

      setLoading(false);
    };

    fetchPaymentInfo();
  }, [user.email]);

  const handlePaymentSuccess = async (paymentResponse: RazorpayPaymentResponse) => {
    const txnId = paymentResponse.razorpay_payment_id; // Use the Razorpay payment ID

    // Fetch user_id from users table
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("user_id")
      .eq("email", user.email)
      .single();

    if (userError || !userData) {
      setErrorMessage("Error fetching user data for payment processing.");
      console.error("Error fetching user data:", userError?.message);
      return;
    }

    const userId = userData.user_id;

    // Insert payment details into payments table
    const { error } = await supabase.from("payments").insert({
      user_id: userId,
      amount: ticketPrice,
      payment_status: "paid",
      payment_id: txnId, // Use the Razorpay payment ID
      created_at: new Date().toISOString(),
    });

    if (error) {
      setErrorMessage("Error processing payment.");
      console.error("Error inserting payment:", error.message);
    } else {
      setTransactionId(txnId); // Save the transaction ID in state
      setTicketPurchased(true);
      router.push("/account"); // Redirect to the account page
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
      if ((window as any).Razorpay) {
        resolve(true);
      } else {
        const script = document.createElement("script");
        script.src = "https://pages.razorpay.com/pl_OyuHRL0d2Kenle/view";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      }
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
      {isEligibleForFreePass ? (
        // User is eligible for free pass
        <div className="text-center flex flex-col items-center py-16">
          <h2 className="text-3xl font-bold">Congratulations!</h2>
          <p className="text-green-500 mt-4">
            You are eligible for a free pass to Mohana Mantra 2K24!
          </p>
          <p className="mt-2">
            You can collect your pass in Campus by showing your respective Institution ID card.
          </p>
          <h4 className="text-red-500 font-bold mt-4">Please carry your ID card for Event.</h4>
        </div>
      ) : (
        // User is not eligible for free pass
        <div>
          {ticketPurchased ? (
            <div className="text-center flex flex-col items-center py-16">
              <h2 className="text-2xl font-bold">Thank You for Registering!</h2>
              <p className="text-green-500 mt-4">You have successfully registered for the event.</p>
              <p className="mt-4">
                You can navigate to the <strong>My Payment</strong> tab to see your payment details.
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white mt-4 p-2 rounded-md"
                onClick={() => router.push("/select-events")} // Adjust the route as needed
              >
                Select Interested Events
              </button>
            </div>
          ) : (
            <div className="text-center flex flex-col gap-3 items-center py-16">
              <h2 className="text-3xl font-bold">Mohana Mantra Event Pass</h2>
              <p>The pass price is ₹{ticketPrice}.</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white mt-4 p-2 rounded-md"
                onClick={handleRazorpayPayment}
              >
                Get Your Pass
              </button>
              {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyTicket;
