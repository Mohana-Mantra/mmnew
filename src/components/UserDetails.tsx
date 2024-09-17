import React, { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from "@/lib/supabaseClient";

interface UserExtended extends User {
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
            .from('users')
            .select('*')
            .eq('email', user.email)
            .single();
        if (error) {
            console.error('Error fetching user details:', error.message);
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
        const { error } = await supabase
            .from('users')
            .update(updates)
            .match({ email: user.email });
        if (error) {
            console.error('Error updating user:', error.message);
        } else {
            setEditMode(false);
        }
        setLoading(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>No user details available.</div>;
    }

    return (
        <div>
            <h2 className="font-bold text-2xl mb-4">User Details</h2>
            {editMode ? (
                <div>
                    {/* Render inputs for each field with pre-filled values */}
                </div>
            ) : (
                <div>
                    <p>Name: {userData.full_name || "N/A"}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone Number: {userData.phone_number}</p>
                    
                </div>
            )}
            <button onClick={() => setEditMode(!editMode)}>
                {editMode ? 'Save Changes' : 'Edit'}
            </button>
            {editMode && <button onClick={handleUpdate}>Update</button>}
        </div>
    );
};

export default UserDetails;
