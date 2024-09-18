import React, { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";
import { IconLoader2 } from "@tabler/icons-react";

interface UserExtended extends User {
    user_id?: string;
    full_name?: string;
    phone_number?: number | string;
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
            // Check if any fields are null, trigger edit mode if true
            if (!data.phone_number || !data.institute_name || !data.year_of_study) {
                setEditMode(true);
            }
        }
        setLoading(false);
    };

    const handleUpdate = async () => {
        if (!userData) return;

        const updates = {
            phone_number: userData.phone_number || null,
            institute_name: userData.institute_name || null,
            year_of_study: userData.year_of_study || null,
            updated_at: new Date().toISOString(),
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
        <div className="py-16 flex flex-col items-center text-center">
            <h2 className="font-bold text-2xl mb-4">User Details</h2>
            {editMode ? (
                <div>
                    <div className="mb-4">
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            value={userData.phone_number || ""}
                            onChange={(e) =>
                                setUserData({ ...userData, phone_number: e.target.value })
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <label>Institution:</label>
                        <input
                            type="text"
                            value={userData.institute_name || ""}
                            onChange={(e) =>
                                setUserData({ ...userData, institute_name: e.target.value })
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <label>Year of Study:</label>
                        <input
                            type="number"
                            value={userData.year_of_study || ""}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    year_of_study: parseInt(e.target.value),
                                })
                            }
                        />
                    </div>
                    <button onClick={handleUpdate}>Save Changes</button>
                </div>
            ) : (
                <div>
                    <p>User ID: {userData.user_id}</p>
                    <p>Name: {userData.full_name || "N/A"}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone Number: {userData.phone_number || "N/A"}</p>
                    <p>Institution: {userData.institute_name || "N/A"}</p>
                    <p>Year: {userData.year_of_study || "N/A"}</p>
                    <button onClick={() => setEditMode(true)}>Update Details</button>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
