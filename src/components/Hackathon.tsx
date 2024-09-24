import Link from "next/link";

const Hackathon = () => {
    return (
        <div className="fixed bottom-2 right-2 z-50 bg-white/35 backdrop-blur-3xl flex flex-col gap-2 items-cente rounded-lg p-3">
            <h1 className="font-bold">Register for Hackathon</h1>
            <Link
                href="https://forms.gle/Xu3MZqCaUQUVXRZm9"
                className="bg-white text-black font-bold py-1.5 px-3 rounded-md text-center"
            >
                Register
            </Link>
            <p>Deadline is Sep 30th</p>
        </div>
    );
};

export default Hackathon;
