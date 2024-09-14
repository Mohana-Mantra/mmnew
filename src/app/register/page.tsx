"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { IconBrandGoogle } from "@tabler/icons-react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false); // Set default to registration page
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); // To navigate after login/register

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const firstName = formData.get("firstname") as string;
    const lastName = formData.get("lastname") as string;

    if (isLogin) {
      // Handle login
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setErrorMessage(error.message);
      } else {
        router.push("/"); // Navigate to the home page after login
      }
    } else {
      // Handle registration
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: `${firstName} ${lastName}`,
          },
        },
      });
      if (error) {
        setErrorMessage(error.message);
      } else {
        router.push("/"); // Navigate to the home page after registration
      }
    }
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      setErrorMessage(error.message);
    } else {
      router.push("/"); // Navigate to home after successful login
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 my-28 shadow-input">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {isLogin ? "Login to Mohana Mantra" : "Register for Mohana Mantra"}
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" name="firstname" placeholder="Tony" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" name="lastname" placeholder="Stark" type="text" />
            </LabelInputContainer>
          </div>
        )}
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
          {isLogin ? "Login" : "Register"} &rarr;
        </button>

        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </form>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      <button
        className="relative group/btn flex space-x-2 items-center px-4 w-full text-black rounded-md h-10 font-bold justify-center shadow-input bg-yellow"
        onClick={signInWithGoogle}
      >
        <IconBrandGoogle className="h-5 aspect-square" />
        <span>{isLogin ? "Login" : "Sign Up"} with Google</span>
      </button>

      <p className="text-center mt-6 text-sm p-2 rounded-md bg-gray-100 dark:bg-gray-800" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span className="font-bold cursor-pointer">{isLogin ? "Sign up" : "Log In"}</span>
      </p>
    </div>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`flex flex-col space-y-2 w-full ${className}`}>{children}</div>;
};
