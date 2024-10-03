"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
// import { IconBrandGoogle } from "@tabler/icons-react"; // Commented out if Google sign-in is disabled

export default function AuthForm() {
    // Set isLogin to true by default
    const [isLogin, setIsLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    // Check if user is already logged in
    useEffect(() => {
        const getUser = async () => {
            const {
                data: { session },
                error,
            } = await supabase.auth.getSession();
            if (error) {
                console.error("Error getting session:", error.message);
            }
            if (session) {
                router.push("/account");
            }
        };
        getUser();
    }, [router]);

    // Handle form submit (login only)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        // Handle login
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setErrorMessage(error.message);
        } else {
            router.push("/account");
        }
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 my-28 shadow-input">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Login to Mohana Mantra
            </h2>

            <p className="mt-4 text-center">
                Registrations for Mohana Mantra 2k24 have been closed. However, don't worry—you still have a chance to experience the fest. You can get your Mohana Mantra Pass on campus as spot registration.
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" placeholder="you@example.com" type="email" required />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" placeholder="••••••••" type="password" required />
                </LabelInputContainer>

                <button
                    className="bg-yellow mt-6 block w-full text-black rounded-md h-10 font-bold"
                    type="submit"
                >
                    Login &rarr;
                </button>

                {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            </form>

            {/* Optionally, you can remove or comment out the Google sign-in button */}
            {/* 
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <button
                className="relative flex space-x-2 items-center px-4 w-full text-black rounded-md h-10 font-bold justify-center shadow-input bg-yellow"
                onClick={signInWithGoogle}
            >
                <IconBrandGoogle className="h-5 w-5" />
                <span>Login with Google</span>
            </button>
            */}
        </div>
    );
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={`flex flex-col space-y-2 w-full ${className}`}>{children}</div>;
};
