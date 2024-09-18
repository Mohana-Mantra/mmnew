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
  const [institutes, setInstitutes] = useState<any[]>([]);
  const [selectedInstitute, setSelectedInstitute] = useState<string>("");

  useEffect(() => {
    fetchUserDetails();
    fetchInstitutes();
  }, [user]);

  // Fetch user details
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
      if (!data.phone_number || !data.institute_name || !data.year_of_study) {
        setEditMode(true);
      }
    }
    setLoading(false);
  };

  // Fetch institutes from the database
  const fetchInstitutes = async () => {
    const { data, error } = await supabase
      .from("institutes")
      .select("name, is_listed")
      .eq("is_listed", true);

    if (error) {
      console.error("Error fetching institutes:", error.message);
    } else {
      setInstitutes(data);
    }
  };

  const handleUpdate = async () => {
    if (!userData) return;

    const updates = {
      phone_number: userData.phone_number || null,
      institute_name: selectedInstitute || userData.institute_name || null,
      year_of_study: userData.year_of_study || null,
      updated_at: new Date().toISOString(),
    };

    setLoading(true);
    const { error } = await supabase
      .from("users")
      .update(updates)
      .eq("email", user.email);

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
              className="text-black"
            />
          </div>

          <div className="mb-4">
            <label>Institution:</label>
            <select
              value={selectedInstitute || userData.institute_name}
              onChange={(e) => setSelectedInstitute(e.target.value)}
              className="text-black"
            >
              <option value="">Select your institution</option>
              {institutes.map((institute) => (
                <option key={institute.name} value={institute.name}>
                  {institute.name}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            {selectedInstitute === "Other" && (
              <input
                type="text"
                placeholder="Enter your institution name"
                value={userData.institute_name || ""}
                onChange={(e) =>
                  setUserData({ ...userData, institute_name: e.target.value })
                }
                className="text-black"
              />
            )}
          </div>

          <div className="mb-4">
            <label>Year of Study:</label>
            <select
              value={userData.year_of_study || ""}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  year_of_study: parseInt(e.target.value),
                })
              }
              className="text-black"
            >
              <option value="">Select year</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div>
          <p>User ID: {userData.user_id}</p>
          <p>Name: {userData.full_name || "N/A"}</p>
          <p>Email: {userData.email}</p>
          <p>Phone Number: {userData.phone_number || "N/A"}</p>
          <p>Institution: {userData.institute_name || "N/A"}</p>
          <p>Year: {userData.year_of_study || "N/A"}</p>
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Update Details
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
