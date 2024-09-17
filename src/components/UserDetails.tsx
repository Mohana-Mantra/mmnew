import React, { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";

const UserDetails = ({ user }: { user: User }) => {
    const [details, setDetails] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        instituteName: "",
        yearOfStudy: ""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('user_id', user.id)
                .single();

            if (error) {
                console.error("Error fetching user details:", error.message);
            } else if (data) {
                setDetails({
                    fullName: data.full_name || "",
                    email: data.email || "",
                    phoneNumber: data.phone_number || "",
                    instituteName: data.institute_name || "",
                    yearOfStudy: data.year_of_study || ""
                });
            }
            setLoading(false);
        };

        fetchUserDetails();
    }, [user.id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.from('users').update({
            full_name: details.fullName,
            email: details.email,
            phone_number: details.phoneNumber,
            institute_name: details.instituteName,
            year_of_study: details.yearOfStudy,
            updated_at: new Date()
        }).eq('user_id', user.id);

        if (error) {
            alert("Error updating details: " + error.message);
            console.error("Error updating details:", error);
        } else {
            alert("Details updated successfully!");
        }
        setLoading(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="font-bold text-2xl mb-4">User Details</h2>
            <label>
                Name:
                <input type="text" name="fullName" value={details.fullName} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={details.email} onChange={handleChange} />
            </label>
            <label>
                Phone Number:
                <input type="text" name="phoneNumber" value={details.phoneNumber} onChange={handleChange} />
            </label>
            <label>
                Institute Name:
                <input type="text" name="instituteName" value={details.instituteName} onChange={handleChange} />
            </label>
            <label>
                Year of Study:
                <input type="text" name="yearOfStudy" value={details.yearOfStudy} onChange={handleChange} />
            </label>
            <button type="submit" disabled={loading}>
                Save Changes
            </button>
        </form>
    );
};

export default UserDetails;
