"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import UserDetails from "@/components/UserDetails";
import MyTicket from "@/components/MyTicket";
import MyPayment from "@/components/MyPayment";
import CampusAmbassador from "@/components/CampusAmbassador";
import { IconLoader2 } from "@tabler/icons-react";

export default function Account() {
    const [user, setUser] = useState<null | User>(null);
    const [isVerified, setIsVerified] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const router = useRouter();
    const tabInParam = useSearchParams().get("tab");

    useEffect(() => {
        const checkVerification = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                const { user } = data.session;
                setUser(user);

                // Check if email is confirmed
                if (user.email_confirmed_at) {
                    setIsVerified(true); // User has verified their email
                } else {
                    setIsVerified(false); // User hasn't verified their email
                }
            } else {
                router.push("/register"); // Redirect to register if no user is logged in
            }
        };

        checkVerification();

        // Check for active tab in URL
        switch (tabInParam) {
            case "user-details":
                setActiveTab(0);
                break;
            case "my-ticket":
                setActiveTab(1);
                break;
            case "my-payment":
                setActiveTab(2);
                break;
            case "campus-ambassador":
                setActiveTab(3);
                break;
            default:
                router.push("/account?tab=user-details");
                break;
        }
    }, [router, tabInParam]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/register"); // Redirect to register after logout
    };

    const resendVerificationEmail = async () => {
        try {
            // Log the user out and prompt them to log in again to trigger the verification email
            await supabase.auth.signOut();
            alert("Verification email has been resent. Please check your inbox.");
            router.push("/register"); // Redirect user to login/register page
        } catch (error) {
            console.error("Error resending verification email:", error);
            alert("There was an error resending the email. Please try again later.");
        }
    };

    // Periodically check if the user is verified
    useEffect(() => {
        if (user && !isVerified) {
            const interval = setInterval(async () => {
                const { data } = await supabase.auth.getUser();
                if (data?.user?.email_confirmed_at) {
                    setIsVerified(true); // Update once verified
                }
            }, 5000); // Check every 5 seconds

            return () => clearInterval(interval); // Clear the interval when component unmounts
        }
    }, [user, isVerified]);

    if (!user) {
        return (
            <div className="h-full w-full flex items-center justify-center">
                <IconLoader2 className="animate-spin h-12 aspect-square" />
            </div>
        );
    }

    if (!isVerified) {
        return (
            <div className="h-full w-full flex flex-col items-center justify-center text-center space-y-4">
                <p>Please verify your email to access your account.</p>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={resendVerificationEmail}
                >
                    Resend Verification Email
                </button>
            </div>
        );
    }

    const changeTab = (tab: 0 | 1 | 2 | 3) => {
        const param =
            tab === 0
                ? "user-details"
                : tab === 1
                ? "my-ticket"
                : tab === 2
                ? "my-payment"
                : "campus-ambassador";
        router.push(`/account?tab=${param}`);
        setActiveTab(tab);
    };

    return (
        <div className="p-4 md:px-16 md:py-24 flex w-full">
            <aside className="flex flex-col w-1/6 space-y-4 p-4 md:border-r border-slate-400">
                <button
                    className={cn(
                        "px-4 py-2 text-white hover:bg-gray-700 rounded-md",
                        activeTab === 0 ? "bg-gray-700" : ""
                    )}
                    onClick={() => changeTab(0)}
                >
                    User Details
                </button>
                <button
                    className={cn(
                        "px-4 py-2 text-white hover:bg-gray-700 rounded-md",
                        activeTab === 1 ? "bg-gray-700" : ""
                    )}
                    onClick={() => changeTab(1)}
                >
                    My Ticket
                </button>
                <button
                    className={cn(
                        "px-4 py-2 text-white hover:bg-gray-700 rounded-md",
                        activeTab === 2 ? "bg-gray-700" : ""
                    )}
                    onClick={() => changeTab(2)}
                >
                    My Payment
                </button>
                <button
                    className={cn(
                        "px-4 py-2 text-white hover:bg-gray-700 rounded-md",
                        activeTab === 3 ? "bg-gray-700" : ""
                    )}
                    onClick={() => changeTab(3)}
                >
                    Campus Ambassador
                </button>
                <button
                    className="px-4 py-2 text-white bg-red-600 hover:bg-red-500 rounded-md"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </aside>
            <div className="flex-grow p-4">
                {activeTab === 0 && <UserDetails user={user} />}
                {activeTab === 1 && <MyTicket user={user} />}
                {activeTab === 2 && <MyPayment user={user} changeTab={changeTab} />}
                {activeTab === 3 && <CampusAmbassador user={user} />}
            </div>
        </div>
    );
}
