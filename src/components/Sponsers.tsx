import { Monoton } from "next/font/google";
import Image from "next/image";
import { InfiniteMovingSponsers } from "./ui/moving-cards";
import l14 from "../../public/assets/14.png";
import l15 from "../../public/assets/15.png";
import l16 from "../../public/assets/16.png";
import l17 from "../../public/assets/17.png";
import l18 from "../../public/assets/18.png";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

function Sponsers() {
    return (
        <>
            <div className="bg-slate-900 py-20 space-y-10 md:space-y-16">
                <h1
                    className={`text-center text-2xl md:text-[2.8rem] text-yellow ${monoton.className}`}
                >
                    Title Sponsor
                </h1>

                <div className="flex justify-center">
                    <Image
                        src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726906649/fs_y2fjh2.jpg"
                        alt="Title Sponsor"
                        width={500}
                        height={300}
                    />
                </div>

                <h1
                    className={`text-center text-2xl md:text-[2.8rem] text-yellow ${monoton.className}`}
                >
                    Sponsors
                </h1>

                <InfiniteMovingSponsers
                    direction="left"
                    pauseOnHover={false}
                    speed="slow"
                    items={[
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726819691/cranes_varsity_rpafvt.svg",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726819687/racloop_f1djzy.svg",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726819672/prakash_arts_ac9oyi.svg",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726819662/talking_heads_cpa3cw.svg",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726819658/krushi_advertising_amcqsg.svg",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726819653/GK_education_loans_gfbutq.svg",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726819642/deccan_park_and_suits_dxyvac.svg",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726819629/talentio_moebhx.svg",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726819625/international_campus_connect_arjvgz.svg",
                            height: 200,
                            width: 300,
                        },
                        // Adding the local PNG images
                        {
                            image: l14.src,
                            height: 200,
                            width: 300,
                        },
                        {
                            image: l15.src,
                            height: 200,
                            width: 300,
                        },
                        {
                            image: l16.src,
                            height: 200,
                            width: 300,
                        },
                        {
                            image: l17.src,
                            height: 200,
                            width: 300,
                        },
                        {
                            image: l18.src,
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
