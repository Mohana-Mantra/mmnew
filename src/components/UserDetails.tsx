"use client";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { IconLoader2, IconUpload } from "@tabler/icons-react";
import { supabase } from "@/lib/supabaseClient";

const UserDetails = ({ user }: { user: User }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [image, setImage] = useState<null | File>(null);
    const [loading, setLoading] = useState(false);

    const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = (event.target as HTMLInputElement).files?.[0];

        if (file) {
            setImage(file);
        }
    };

    if (loading)
        return (
            <div className="flex h-full w-full items-center justify-center">
                <IconLoader2 className="w-8 h-8 animate-spin" />
            </div>
        );

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col md:flex-row h-fit items-center p-4 md:p-16 w-full">
                <label
                    htmlFor="userImage"
                    className="relative aspect-square w-full px-8 md:w-1/2 lg:w-1/3 rounded-md"
                >
                    {image || !user.user_metadata?.picture ? (
                        <Image
                            src={image ? image : user.user_metadata?.picture}
                            fill
                            alt="profile"
                            className="object-cover rounded-md"
                        />
                    ) : (
                        <>
                            <input
                                type="file"
                                accept="image/*"
                                id="userImage"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                            <div className="w-full absolute inset-0 rounded-md h-full bg-slate-950 flex gap-2 cursor-pointer flex-col items-center justify-center">
                                <IconUpload className="w-8 h-8 text-white" />
                                <span>Upload Your Image</span>
                            </div>
                        </>
                    )}
                </label>
                <div className="w-full flex flex-col gap-4 px-4 md:px-20">
                    <div className="flex flex-col gap-2">
                        <Label className="text-white font-bold">Name</Label>
                        <input id="name" className="w-full max-w-md" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email" className="text-white font-bold">
                            Email
                        </Label>
                        <input id="email" className="w-full max-w-md" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="phone" className="text-white font-bold">
                            Phone Number
                        </Label>
                        <input id="phone" className="w-full max-w-md" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="institution" className="text-white font-bold">
                            Institution
                        </Label>
                        <input id="institution" className="w-full max-w-md" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="year" className="text-white font-bold">
                            Academic Year
                        </Label>
                        <input id="year" className="w-full max-w-md" />
                    </div>
                    <div className="flex justify-end max-w-md">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-md">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
