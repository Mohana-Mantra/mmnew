"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { IconBrandGoogle } from "@tabler/icons-react";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true); // Default to login only
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

    // Handle login submit
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
                {isLogin ? "Login to Mohana Mantra" : "Register for Mohana Mantra"}
            </h2>

            {isLogin ? (
                // Login Form
                <form className="my-8" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" placeholder="you@example.com" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" placeholder="••••••••" type="password" />
                    </LabelInputContainer>

                    <button
                        className="bg-yellow mt-6 relative group/btn from-white to-neutral-600 block w-full text-black rounded-md h-10 font-bold"
                        type="submit"
                    >
                        Login &rarr;
                    </button>

                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </form>
            ) : (
                // Registration closed message
                <div className="text-center my-4 ">
                    <h1 className="text-red-500">Registrations for Mohana Mantra 2k24 have been closed.</h1>
                    <p className="text-white-500">
                        However, don&#39;t worry! You still have a chance to experience the fest.
                        <br /><br />You can get your Mohana Mantra Pass on campus as a spot registration.
                    </p>
                </div>
            )}

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <p
                className="text-center mt-6 text-sm p-2 rounded-md bg-gray-100 dark:bg-gray-800"
                onClick={() => setIsLogin(!isLogin)}
            >
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <span className="font-bold cursor-pointer">{isLogin ? "Sign up" : "Log In"}</span>
            </p>
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
