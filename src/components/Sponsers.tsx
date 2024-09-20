import { Monoton } from "next/font/google";
import Image from "next/image";
import { InfiniteMovingSponsers } from "./ui/moving-cards";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

function Sponsers() {
    return (
        <>
            <div className="bg-slate-900 py-20 space-y-10 md:space-y-16">
                <h1
                    className={`text-center text-2xl md:text-[2.8rem] text-yellow ${monoton.className}`}
                >
                    sponsors
                </h1>
                <InfiniteMovingSponsers
                    direction="left"
                    pauseOnHover={false}
                    speed="slow"
                    items={[
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133434/sponsers/ftz8npac6rvtnnk4njn1.png",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133432/sponsers/fbmxx6gj6h5gzureb0gs.png",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133434/sponsers/y3emwyi3svo2c6hywpie.png",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/sponsers/fhhbvbfprm47dxjelwed.png",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133438/sponsers/vgwhp8urvhl3zdvlw5pl.png",
                            height: 200,
                            width: 300,
                        },
                    ]}
                />
            </div>
        </>
    );
}

export default Sponsers;
