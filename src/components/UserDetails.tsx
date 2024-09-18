import React, { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";
import { IconLoader2 } from "@tabler/icons-react";

interface UserExtended extends User {
    user_id?: string;
    full_name?: string;
    phone_number?: number;
    institute_name?: string;
    year_of_study?: number;
    is_verified?: boolean;
    is_eligible_for_free_pass?: boolean;
}

const UserDetails = ({ user }: { user: User }) => {
    const [userData, setUserData] = useState<UserExtended | null>(null);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUserDetails();
    }, [user]);

    const fetchUserDetails = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("email", user.email)
            .single();
        if (error) {
            console.error("Error fetching user details:", error.message);
        } else {
            setUserData(data);
        }
        setLoading(false);
    };

    const handleUpdate = async () => {
        if (!userData) return;

        const updates = {
            ...userData,
            updated_at: new Date(),
        };

        setLoading(true);
        const { error } = await supabase.from("users").update(updates).match({ email: user.email });
        if (error) {
            console.error("Error updating user:", error.message);
        } else {
            setEditMode(false);
        }
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="h-full w-full flex items-center justify-center">
                <IconLoader2 className="animate-spin h-12 aspect-square" />
            </div>
        );
    }

    if (!userData) {
        return <div>No user details available.</div>;
    }

    return (
        <div className=" py-16 flex flex-col itcems-center text-center">
            <h2 className="font-bold text-2xl mb-4">User Details</h2>
            {editMode ? (
                <div>{/* Render inputs for each field with pre-filled values */}</div>
            ) : (
                <div>
                    <p>User ID {userData.user_id}</p>
                    <p>Name: {userData.full_name || "N/A"}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone Number: {userData.phone_number}</p>
                    <p>Institution: {userData.institute_name}</p>
                    <p>Year: {userData.year_of_study}</p>
                </div>
            )}
            <button onClick={() => setEditMode(!editMode)}>
                {editMode ? "Save Changes" : "Update Details"}
            </button>
            {editMode && <button onClick={handleUpdate}>Update</button>}
        </div>
    );
};

export default UserDetails;
