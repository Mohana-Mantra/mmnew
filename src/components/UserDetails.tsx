import React, { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";

const UserDetails = ({ user }: { user: User }) => {
    const [name, setName] = useState(user.user_metadata?.full_name || "");
    const [editing, setEditing] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        // Initialize name from user data
        setName(user.user_metadata?.full_name || "");
    }, [user]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name) {
            setErrorMessage("Name cannot be empty.");
            return;
        }

        const { error } = await supabase
            .from("users")
            .update({ full_name: name, updated_at: new Date() })
            .eq("user_id", user.id);

        if (error) {
            setErrorMessage(error.message);
        } else {
            setSuccessMessage("Name updated successfully!");
            setEditing(false);
        }
    };

    return (
        <div>
            <h2 className="font-bold text-2xl mb-4">User Details</h2>
            {editing ? (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                    {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={() => setEditing(false)}
                        className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md"
                    >
                        Cancel
                    </button>
                </form>
            ) : (
                <div>
                    <p>Name: {name || "N/A"}</p>
                    <p>Email: {user.email}</p>
                    <button
                        onClick={() => setEditing(true)}
                        className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md"
                    >
                        Edit Name
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
