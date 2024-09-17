"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

export default function Account() {
    const [user, setUser] = useState<null | User>(null);
    const router = useRouter();

    useEffect(() => {
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
        <div>
            <h1>Welcome, {user.email}</h1>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
                Logout
            </button>
        </div>
    );
}
