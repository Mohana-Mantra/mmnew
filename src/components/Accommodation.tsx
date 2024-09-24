import React from "react";
import { User } from "@supabase/supabase-js";

const Accommodation = ({ user }: { user: User }) => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Accommodation Information</h1>

            {/* Accommodation details */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Room Rent Details</h2>
                <p className="mt-4 text-lg">
                    Accommodation Facility: ₹300 for room rent, and a refundable caution deposit of ₹200 is required.
                </p>
                <p className="mt-4 text-lg">
                    Separate rooms are provided for boys and girls. Please note that food is not included in the accommodation fee.
                </p>
                <p className="mt-4 text-lg">
                    <strong>Payment:</strong> The amount for accommodation is to be paid on campus upon arrival or after visiting.
                </p>
                <p className="mt-4 text-lg">
                    <strong>Note:</strong> Only spot payments are available, and the ₹200 caution deposit is refundable.
                </p>
            </section>

            {/* Registration instructions */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Complete Your Registration</h2>
                <p className="mt-4 text-lg">
                    Please kindly fill in the details below to complete your registration for the accommodation facility.
                </p>
            </section>

            {/* Register Now Button */}
            <div className="mt-8">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc3_Orn-w-G1xtr4NyuLnGlv9EXa7j4xXMGmAejTgUuBsGpcA/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white mt-4 p-2 rounded-md transition duration-300"
                    >
                        Register Now
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Accommodation;
