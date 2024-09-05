function Contact() {
    return (
        <div className="py-28">
            <h1 className="text-center text-4xl font-moul">Ask a Query</h1>
            <form className="max-w-4xl mx-auto w-full p-4 md:px-20 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Tony Stark" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="you@example.com" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder="Type your msg here..." required />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        placeholder="Type your msg here..."
                        required
                        rows={5}
                    ></textarea>
                </div>
                <div className="w-full max-w-96 mx-auto md:mx-0 flex flex-col">
                    <span>Upload file</span>
                    <label
                        htmlFor="file"
                        className="w-48 py-3 rounded-md border border-white content-center text-center cursor-pointer"
                    >
                        Attach File
                        <input type="file" id="file" className="hidden" />
                    </label>
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
        </div>
    );
}

export default Contact;
