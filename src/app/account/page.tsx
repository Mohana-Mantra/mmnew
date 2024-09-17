"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import UserDetails from "@/components/UserDetails";
import MyTicket from "@/components/MyTicket";
import MyPayment from "@/components/MyPayment";

export default function Account() {
    const [user, setUser] = useState<null | User>(null);
    const [userDetails, setUserDetails] = useState<any>(null); // Store user details from the users table
    const [activeTab, setActiveTab] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                setUser(data.session.user);

                // Fetch user details from users table
                const { data: userDetails, error } = await supabase
                    .from('users')
                    .select('*')
                    .eq('user_id', data.session.user.id)
                    .single();

                if (error) {
                    console.error(error);
                } else {
                    setUserDetails(userDetails);
                }
            } else {
                router.push("/register");
            }
        };
        getUser();
    }, [router]);

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            router.push("/register");
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 md:px-16 md:py-24 flex w-full">
            <aside className="flex flex-col w-1/6 space-y-4 p-4 md:border-r border-slate-400">
                <button
                    className={`px-4 py-2 text-white hover:bg-gray-700 rounded-md ${activeTab === 0 ? 'bg-gray-700' : ''}`}
                    onClick={() => setActiveTab(0)}
                >
                    User Details
                </button>
                <button
                    className={`px-4 py-2 text-white hover:bg-gray-700 rounded-md ${activeTab === 1 ? 'bg-gray-700' : ''}`}
                    onClick={() => setActiveTab(1)}
                >
                    My Ticket
                </button>
                <button
                    className={`px-4 py-2 text-white ${activeTab === 2 ? 'bg-gray-700' : ''}`}
                    onClick={() => setActiveTab(2)}
                >
                    My Payment
                </button>
                <button
                    className="px-4 py-2 text-white bg-red-600 hover:bg-red-500 rounded-md"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </aside>
            <main className="w-5/6 p-4">
                {activeTab === 0 && <UserDetails user={userDetails} />}
                {activeTab === 1 && <MyTicket user={userDetails} />}
                {activeTab === 2 && <MyPayment user={userDetails} />}
            </main>
        </div>
    );
}
