"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import UserDetails from "@/components/UserDetails";
import MyTicket from "@/components/MyTicket";
import MyPayment from "@/components/MyPayment";

export default function Account() {
    const [user, setUser] = useState<null | User>(null);
    const [activeTab, setActiveTab] = useState(0);
    const router = useRouter();

    useEffect(() => {
        console.log(user);
        const getUser = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                setUser(data?.session?.user);
            } else {
                router.push("/register"); // Redirect to register if no user is logged in
            }
        };
        getUser();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/register"); // Redirect to register after logout
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 md:px-16 md:py-24 flex w-full">
            <aside className="flex flex-col w-1/6 space-y-4 p-4 md:border-r border-slate-400">
                <button
                    className={cn(
                        "px-4 py-2 text-white hover:bg-gray-700 rounded-md",
                        activeTab === 0 ? "bg-gray-700" : ""
                    )}
                    onClick={() => setActiveTab(0)}
                >
                    User Details
                </button>
                <button
                    className={cn(
                        "px-4 py-2 text-white hover:bg-gray-700 rounded-md",
                        activeTab === 1 ? "bg-gray-700" : ""
                    )}
                    onClick={() => setActiveTab(1)}
                >
                    My Ticket
                </button>
                <button
                    className={cn(
                        "px-4 py-2 text-white hover:bg-gray-700 rounded-md",
                        activeTab === 2 ? "bg-gray-700" : ""
                    )}
                    onClick={() => setActiveTab(2)}
                >
                    My Payment
                </button>
                <button
                    className={cn(
                        "px-4 py-2 text-white hover:bg-gray-700 rounded-md",
                        activeTab === 1 ? "bg-gray-700" : ""
                    )}
                    onClick={() => setActiveTab(1)}
                >
                    Campus Ambassador
                </button>
                <button
                    className="px-4 py-2 text-white bg-red-600 hover:bg-red-500 rounded-md"
                    onClick={async () => {
                        await supabase.auth.signOut();
                    }}
                >
                    Logout
                </button>
            </aside>
            <div className="w-full h-full">
                {activeTab === 0 && <UserDetails user={user} />}
                {activeTab === 1 && <MyTicket user={user} />}
                {activeTab === 2 && <MyPayment user={user} />}
            </div>
        </div>
    );
}
