"use client"; // Ensure this line is at the very top

import { useState, ChangeEvent } from "react";

function Contact() {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
        }
    };

    return (
        <div className="py-28">
            <h1 className="text-center text-4xl font-moul">Ask a Query</h1>
            <form
                target="_blank"
                action="https://formsubmit.co/mohanamantra@mbu.asia"
                method="POST"
                encType="multipart/form-data"
                className="max-w-4xl mx-auto w-full p-4 md:px-20 space-y-4 text-black"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="text-white">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Tony "
                            required
                            name="name"
                            className="w-full p-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="text-white">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Stark"
                            required
                            name="name"
                            className="w-full p-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            required
                            name="email"
                            className="w-full p-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-white">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="+91 234 567 890 (WhatsApp)"
                            required
                            name="phone"
                            className="w-full p-2 rounded-md"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="text-white">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        placeholder="Type your msg here..."
                        required
                        name="subject"
                        className="w-full p-2 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="text-white">
                        Description
                    </label>
                    <textarea
                        id="description"
                        placeholder="Type your msg here..."
                        required
                        rows={5}
                        name="description"
                        className="w-full p-2 rounded-md"
                    ></textarea>
                </div>
                <div className="w-full max-w-96 mx-auto md:mx-0 flex flex-col">
                    <span className="text-white">Upload file(s)</span>
                    <label
                        htmlFor="file"
                        className="w-48 py-3 text-white rounded-md border border-white content-center text-center cursor-pointer"
                    >
                        Attach File(s)
                        <input
                            type="file"
                            id="file"
                            className="hidden"
                            name="attachment"
                            multiple
                            onChange={handleFileChange}
                        />
                    </label>
                    {uploadedFiles.length > 0 && (
                        <ul className="mt-2 text-white">
                            {uploadedFiles.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex justify-center pt-6">
                    <button
                        type="submit"
                        className="mx-auto w-fit bg-yellow text-black font-bold py-3 px-16 rounded-full"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div className="text-center mt-10">
                <h2 className="text-white text-2xl">Contact us on WhatsApp</h2>
                <a
                    href="https://wa.me/+919281089404" // Replace with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 text-xl"
                >
                    +91 92810 89404
                </a>
            </div>
        </div>
    );
}

export default Contact;
