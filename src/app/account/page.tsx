"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import UserDetails from "@/components/UserDetails";
import MyTicket from "@/components/MyTicket";
import MyPayment from "@/components/MyPayment";
import Accommodation from "@/components/Accommodation";
import { IconLoader2 } from "@tabler/icons-react";
import EventsList from "@/components/EventsList";

export default function Account() {
    const [user, setUser] = useState<null | User>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [isEligibleForFreePass, setIsEligibleForFreePass] = useState(false);
    const router = useRouter();
    const tabInParam = useSearchParams().get("tab");

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                setUser(data.session.user);

                // Fetch eligibility for free pass
                const { data: userData, error } = await supabase
                    .from("users")
                    .select("is_eligible_for_free_pass")
                    .eq("email", data.session.user.email)
                    .single();

                if (userData?.is_eligible_for_free_pass) {
                    setIsEligibleForFreePass(true);
                }
            } else {
                // Redirect to login/register page if not authenticated
                router.push("/register");
            }
            setIsLoading(false);
        };
        getUser();

        switch (tabInParam) {
            case "user-details":
                setActiveTab(0);
                break;
            case "my-ticket":
                setActiveTab(1);
                break;
            case "events-list":
                setActiveTab(2);
                break;
            case "my-payment":
                setActiveTab(3);
                break;
            case "campus-ambassador":
                setActiveTab(4);
                break;
            default:
                setActiveTab(0);
                break;
        }
    }, [router, tabInParam]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/register"); // Redirect to register after logout
    };

    // Avoid rendering until we know whether the user is logged in
    if (isLoading) {
        return null; // Optionally, display a loading spinner here
    }

    if (!user) {
        return null; // Safeguard in case user is null after loading
    }

    const changeTab = (tab: 0 | 1 | 2 | 3 | 4) => {
        const param =
            tab === 0
                ? "user-details"
                : tab === 1
                ? "my-ticket"
                : tab === 2
                ? "events-list"
                : tab === 3
                ? "my-payment"
                : "campus-ambassador";
        router.push(`/account?tab=${param}`);
        setActiveTab(tab);
    };

    return (
        <div className="p-4 md:px-16 md:py-24 flex flex-col lg:flex-row w-full">
            <aside className="flex flex-col lg:w-1/6 lg:flex-col space-y-4 p-4 md:border-r border-slate-400">
                {/* Horizontal Scroll Tabs for Mobile */}
                <div className="flex lg:flex-col flex-row overflow-x-auto space-x-4 lg:space-x-0 lg:space-y-4 mt-14">
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
                        Events List
                    </button>
                    {!isEligibleForFreePass && (
                        <button
                            className={cn(
                                "px-4 py-2 text-white hover:bg-gray-700 rounded-md",
                                activeTab === 3 ? "bg-gray-700" : ""
                            )}
                            onClick={() => changeTab(3)}
                        >
                            My Payment
                        </button>
                    )}
                    <button
                        className={cn(
                            "px-4 py-2 text-white hover:bg-gray-700 rounded-md",
                            activeTab === 4 ? "bg-gray-700" : ""
                        )}
                        onClick={() => changeTab(4)}
                    >
                        Campus Ambassador
                    </button>
                </div>
                <button
                    className="px-4 py-2 text-white bg-red-600 hover:bg-red-500 rounded-md"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </aside>
            <div className="flex-grow p-4">
                {alertMessage && (
                    <div className="p-4 mb-4 text-green-800 bg-green-200 border border-green-300 rounded">
                        {alertMessage}
                    </div>
                )}
                {activeTab === 0 && <UserDetails user={user} />}
                {activeTab === 1 && <MyTicket user={user} />}
                {activeTab === 2 && <EventsList user={user} />}
                {activeTab === 3 && <MyPayment user={user} changeTab={changeTab} />}
                {activeTab === 4 && <Accommodation user={user} />}
            </div>
        </div>
    );
}
