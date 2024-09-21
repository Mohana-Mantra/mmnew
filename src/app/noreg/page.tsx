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

      // Check if user's institute is listed
      if (data.institute_name && data.institute_name !== "Other") {
        const { data: institute, error: instituteError } = await supabase
          .from("institutes")
          .select("name, is_listed")
          .eq("name", data.institute_name)
          .eq("is_listed", true)
          .single();

        if (!instituteError && institute) {
          // If institute is listed, update is_eligible_for_free_pass
          const { error: updateError } = await supabase
            .from("users")
            .update({ is_eligible_for_free_pass: true })
            .eq("email", user.email);

          if (updateError) {
            console.error("Error updating eligibility:", updateError.message);
          } else {
            data.is_eligible_for_free_pass = true;
            setUserData(data);
          }
        } else {
          // Set eligibility to false if the institute doesn't match
          const { error: updateError } = await supabase
            .from("users")
            .update({ is_eligible_for_free_pass: false })
            .eq("email", user.email);

          if (updateError) {
            console.error("Error updating eligibility:", updateError.message);
          } else {
            data.is_eligible_for_free_pass = false;
            setUserData(data);
          }
        }
      } else {
        // If the institute is "Other", set is_eligible_for_free_pass to false
        const { error: updateError } = await supabase
          .from("users")
          .update({ is_eligible_for_free_pass: false })
          .eq("email", user.email);

        if (updateError) {
          console.error("Error updating eligibility:", updateError.message);
        } else {
          data.is_eligible_for_free_pass = false;
          setUserData(data);
        }
      }

      if (!data.phone_number || !data.institute_name || !data.year_of_study) {
        setEditMode(true);
      }
      setSelectedInstitute(data.institute_name || "");
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
  
    const updates: {
      phone_number: string | number | null;
      institute_name: string | null;
      year_of_study: number | null;
      updated_at: string;
      is_eligible_for_free_pass?: boolean;
    } = {
      phone_number: userData.phone_number || null,
      institute_name: selectedInstitute || userData.institute_name || null,
      year_of_study: userData.year_of_study || null,
      updated_at: new Date().toISOString(),
    };
  
    setLoading(true);
  
    // Check if the selected institute is "Other"
    if (selectedInstitute === "Other") {
      updates.is_eligible_for_free_pass = false;
    } else {
      // Check if the selected institute is listed
      const { data: institute, error: instituteError } = await supabase
        .from("institutes")
        .select("name")
        .eq("name", selectedInstitute)
        .eq("is_listed", true)
        .single();
  
      if (instituteError || !institute) {
        updates.is_eligible_for_free_pass = false;
      } else {
        updates.is_eligible_for_free_pass = true;
      }
    }
  
    const { error } = await supabase
      .from("users")
      .update(updates)
      .eq("email", user.email);
  
    if (error) {
      console.error("Error updating user:", error.message);
    } else {
      // Re-fetch updated user data after successful update
      fetchUserDetails();
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
        <div className="w-full max-w-md">
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium mb-1">Phone Number:</label>
            <input
              type="text"
              value={userData.phone_number || ""}
              onChange={(e) =>
                setUserData({ ...userData, phone_number: e.target.value })
              }
              className="text-black w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-sm font-medium mb-1">Institution:</label>
            <select
              value={selectedInstitute || userData.institute_name}
              onChange={(e) => setSelectedInstitute(e.target.value)}
              className="text-black w-full border border-gray-300 p-2 rounded"
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
                className="text-black w-full border border-gray-300 p-2 rounded mt-2"
              />
            )}
          </div>

          <div className="mb-4 text-left">
            <label className="block text-sm font-medium mb-1">Year of Study:</label>
            <select
              value={userData.year_of_study || ""}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  year_of_study: parseInt(e.target.value),
                })
              }
              className="text-black w-full border border-gray-300 p-2 rounded"
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
            className="bg-blue-500 text-white py-2 px-4 rounded w-full"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md">
          <p className="text-left mb-4">
            <strong>User ID:</strong> {userData.user_id}
          </p>
          <p className="text-left mb-4">
            <strong>Name:</strong> {userData.full_name || "N/A"}
          </p>
          <p className="text-left mb-4">
            <strong>Email:</strong> {userData.email}
          </p>
          <p className="text-left mb-4">
            <strong>Phone Number:</strong> {userData.phone_number || "N/A"}
          </p>
          <p className="text-left mb-4">
            <strong>Institution:</strong> {userData.institute_name || "N/A"}
          </p>
          <p className="text-left mb-4">
            <strong>Year:</strong> {userData.year_of_study || "N/A"}
          </p>
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded w-full"
          >
            Update Details
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
