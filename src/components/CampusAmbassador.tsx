import React from "react";
import { User } from "@supabase/supabase-js";

const CampusAmbassador = ({ user }: { user: User }) => {
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

            {/* Why Users Should Consider It */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Why Should You Consider It?</h2>
                <p className="mt-4 text-lg">
                    Being a Campus Ambassador for Mohana Mantra offers a unique opportunity to develop your leadership
                    skills, expand your network, and be part of an exciting cultural event. You will have a chance to represent
                    one of the most prestigious events in the student community and showcase your skills in event management,
                    communication, and marketing.
                </p>
            </section>

            {/* Perks of Being a Campus Ambassador */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Perks and Benefits</h2>
                <ul className="mt-4 text-lg list-disc list-inside space-y-2">
                    <li>Exclusive access to Mohana Mantra events and workshops.</li>
                    <li>Certificate of Recognition as a Campus Ambassador.</li>
                    <li>Opportunities to network with industry leaders and professionals.</li>
                    <li>Free event passes and merchandise for top-performing ambassadors.</li>
                    <li>Skill development in areas like marketing, communication, and event management.</li>
                </ul>
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
                <button
                    className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-md hover:bg-yellow-600 transition duration-300"
                    onClick={() => {
                        // You can connect this button to your application form, e.g., redirect or open modal.
                        alert("Redirecting to Campus Ambassador Application Form");
                    }}
                >
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default CampusAmbassador;
