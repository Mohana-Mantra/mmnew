import React from "react";
import { User } from "@supabase/supabase-js";

const UserDetails = ({ user }: { user: User }) => {
    return (
        <div>
            <h2 className="font-bold text-2xl mb-4">User Details</h2>
            <p>Name: {user.user_metadata?.full_name || "N/A"}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetails;
