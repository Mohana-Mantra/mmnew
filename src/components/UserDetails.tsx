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
    const [editMode, setEditMode] = useState(false);
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

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = async () => {
        setLoading(true);
        const { error } = await supabase.from('users').update({
            full_name: details.fullName,
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
        setEditMode(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-4">
            <h2 className="font-bold text-2xl mb-4">User Details</h2>
            <div className="space-y-2">
                <p>Name: {editMode ? <input type="text" name="fullName" value={details.fullName} onChange={handleChange} /> : details.fullName}</p>
                <p>Email: {details.email}</p>  {/* Email remains uneditable */}
                {editMode && (
                    <>
                        <p>Phone Number: <input type="text" name="phoneNumber" value={details.phoneNumber} onChange={handleChange} /></p>
                        <p>Institute Name: <input type="text" name="instituteName" value={details.instituteName} onChange={handleChange} /></p>
                        <p>Year of Study: <input type="text" name="yearOfStudy" value={details.yearOfStudy} onChange={handleChange} /></p>
                    </>
                )}
            </div>
            {editMode ? (
                <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Save Changes
                </button>
            ) : (
                <button onClick={handleEdit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update Details
                </button>
            )}
        </div>
    );
};

export default UserDetails;
