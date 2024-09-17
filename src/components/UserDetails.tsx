import React, { useState, useEffect } from "react";
import { User, AuthError } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";

const UserDetails = ({ user }: { user: User }) => {
    const [fullName, setFullName] = useState<string>(user.user_metadata?.full_name || "");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [instituteName, setInstituteName] = useState<string>("");
    const [yearOfStudy, setYearOfStudy] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch additional user details from the database
    useEffect(() => {
        const fetchUserDetails = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('user_id', user.id)
                .maybeSingle();  // Changes here: use maybeSingle instead of single
    
            if (error) {
                setError(error.message);
            } else if (data) {
                setPhoneNumber(data.phone_number || "");
                setInstituteName(data.institute_name || "");
                setYearOfStudy(data.year_of_study || "");
            } else {
                // No user found, handle appropriately
                setError("No user details found.");
            }
            setLoading(false);
        };
    
        fetchUserDetails();
    }, [user.id]);
    

    const updateUserDetails = async () => {
        setLoading(true);
        const updates = {
            user_id: user.id,  // Assuming user_id is the primary key
            full_name: fullName,
            phone_number: phoneNumber,
            institute_name: instituteName,
            year_of_study: yearOfStudy,
            updated_at: new Date(),
        };
    
        const { error } = await supabase.from('users').upsert(updates, {
            onConflict: "user_id"  // Use this if user_id is the unique or primary key
        });
    
        if (error) {
            setError(error.message);
        } else {
            setError(null);
        }
        setLoading(false);
    };
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2 className="font-bold text-2xl mb-4">User Details</h2>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>
            <div>
                <label>Phone Number:</label>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div>
                <label>Institute Name:</label>
                <input
                    type="text"
                    value={instituteName}
                    onChange={(e) => setInstituteName(e.target.value)}
                />
            </div>
            <div>
                <label>Year of Study:</label>
                <input
                    type="text"
                    value={yearOfStudy}
                    onChange={(e) => setYearOfStudy(e.target.value)}
                />
            </div>
            <button onClick={updateUserDetails}>Update Details</button>
        </div>
    );
};

export default UserDetails;
