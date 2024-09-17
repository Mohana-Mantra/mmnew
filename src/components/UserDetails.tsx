import React, { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";

const UserDetails = ({ user }: { user: User }) => {
    const [details, setDetails] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        instituteName: "",
        yearOfStudy: "",
        isVerified: false,
        isEligibleForFreePass: false,
    });
    const [loading, setLoading] = useState(true);
    const [editingField, setEditingField] = useState<string | null>(null);

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
                    yearOfStudy: data.year_of_study || "",
                    isVerified: data.is_verified || false,
                    isEligibleForFreePass: data.is_eligible_for_free_pass || false,
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

    const handleEdit = (fieldName: string) => {
        setEditingField(fieldName);
    };

    const handleSave = async () => {
        setLoading(true);
        const { error } = await supabase.from('users').update({
            [editingField as string]: details[editingField as keyof typeof details],
            updated_at: new Date()
        }).eq('user_id', user.id);

        if (error) {
            alert("Error updating details: " + error.message);
            console.error("Error updating details:", error);
        } else {
            alert("Details updated successfully!");
        }
        setLoading(false);
        setEditingField(null);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const renderDetail = (key: string, value: string | boolean) => {
        const isEmpty = value === "" || value === null;
        return (
            <div>
                <span>{key}: </span>
                {editingField === key ? (
                    <input
                        type="text"
                        name={key}
                        value={value.toString()}
                        onChange={handleChange}
                        onBlur={handleSave}
                    />
                ) : (
                    <span>
                        {isEmpty ? "N/A" : value.toString()}
                        {isEmpty && <button onClick={() => handleEdit(key)}>Edit</button>}
                    </span>
                )}
            </div>
        );
    };

    return (
        <div>
            <h2 className="font-bold text-2xl mb-4">User Details</h2>
            {Object.entries(details).map(([key, value]) => {
                if (key !== "email") { // Email should not be editable
                    return renderDetail(key, value);
                } else {
                    return <div>{key}: {value.toString()}</div>; // Just display the email
                }
            })}
        </div>
    );
};

export default UserDetails;
