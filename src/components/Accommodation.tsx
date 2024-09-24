import React from "react";
import { User } from "@supabase/supabase-js";

const Accommodation = ({ user }: { user: User }) => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Join the Mohana Mantra Campus Ambassador Program</h1>

            {/* Introduction to the Campus Ambassador Program */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">What is the Campus Ambassador Program?</h2>
                <p className="mt-4 text-lg">
                    The Mohana Mantra Campus Ambassador Program is an initiative to empower enthusiastic students
                    to represent Mohana Mantra in their respective colleges. As a Campus Ambassador, you will act as a
                    bridge between Mohana Mantra and your college community, helping to spread the word, promote the
                    event, and engage fellow students.
                </p>
            </section>




            {/* Responsibilities of a Campus Ambassador */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">What Does a Campus Ambassador Do?</h2>
                <p className="mt-4 text-lg">
                    As a Campus Ambassador, your role will involve:
                </p>
                <ul className="mt-4 text-lg list-disc list-inside space-y-2">
                    <li>Promoting Mohana Mantra events on social media and other platforms.</li>
                    <li>Engaging with students in your college and encouraging them to participate.</li>
                    <li>Organizing mini-events or workshops leading up to the main event.</li>
                    <li>Collaborating with the Mohana Mantra team for marketing and promotional activities.</li>
                    <li>Providing feedback and suggestions to enhance the event experience.</li>
                </ul>
            </section>

            {/* Apply Now Button */}
            <div className="mt-8">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf-4P1qjgEyDRmZVGfDUx5gB2sFP2lKrz0qBcQ7nmKNJLLmLQ/viewform?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white mt-4 p-2 rounded-md transition duration-300"
                    >
                        Apply Now
                    </button>
                </a>
            </div>

        </div>
    );
};

export default Accommodation;
