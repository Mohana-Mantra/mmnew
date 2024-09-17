const InHouse = () => {
    return (
        <div className="min-h-screen bg-primary flex items-center justify-center p-4 mt-6">
            <div className="w-full max-w-lg">
                <div className="bg-gray-800 text-white text-center p-5 rounded-t-lg">
                    <h1 className="text-2xl font-semibold">Registration Form</h1>
                    <h3 className="text-lg">MOHANA MANTRA 2024</h3>
                </div>
                <div className="bg-white p-6 rounded-b-lg shadow-lg">
                    <div className="text-center mb-4">
                        <img
                            src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133753/uqwbidsxcrockemrydm2.png"
                            alt="Mohana Mantra 2024"
                            className="w-48 h-auto mx-auto"
                        />
                    </div>
                    <h3 className="text-center text-black text-xl font-medium mb-6"> This page is only for the Students from SVEC & MBU <br /><br />Date: 04 to 06 Oct</h3>
                    <div className="text-center">
                        <a
                            href="https://forms.gle/RjWN1vABmDMiicsZ7"
                            className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 inline-block transform hover:scale-105"
                        >
                            BUY YOUR PASS!
                        </a>
                    </div>
                    <p className="mt-6 text-center bg-green-100 text-green-800 p-4 rounded border border-green-400">
                        ***Upon completing the payment, kindly await the redirection to the Google
                        Form. Subsequently, please submit the form. Thank you***
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InHouse;
