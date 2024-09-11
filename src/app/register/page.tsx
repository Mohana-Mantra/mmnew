"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(false); // Set default to registration page

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(isLogin ? "Login form submitted" : "Register form submitted");
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 my-28 shadow-input">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                {isLogin ? "Login to Mohana Mantra" : "Register for Mohana Mantra"}
            </h2>


            <form className="my-8" onSubmit={handleSubmit}>
                {/* Conditional Rendering for Register/Login Forms */}
                {!isLogin && (
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="Tony" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Stark" type="text" />
                        </LabelInputContainer>
                    </div>
                )}
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="you@example.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="••••••••" type="password" />
                </LabelInputContainer>

                <button
                    className="bg-yellow mt-6 relative group/btn from-white to-neutral-600 block w-full text-black rounded-md h-10 font-bold"
                    type="submit"
                >
                    {isLogin ? "Login" : "Register"} &rarr;
                    <BottomGradient />
                </button>
            </form>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <button
                className="relative group/btn flex space-x-2 items-center px-4 w-full
                text-black rounded-md h-10 font-bold justify-center shadow-input bg-yellow"
            >
                <IconBrandGoogle className="h-5 aspect-square" />
                <span>{isLogin ? "Login" : "Sign Up"} with Google</span>
                <BottomGradient />
            </button>

            {/* Conditional rendering for "Already have an account? / Don't have an account?" */}
            <p
                className="text-center mt-6 text-sm p-2 rounded-md bg-gray-100 dark:bg-gray-800"
                onClick={() => setIsLogin(!isLogin)} // Toggle between login and registration
            >
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <span className="font-bold cursor-pointer">
                    {isLogin ? "Sign up" : "Log In"}
                </span>
            </p>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
