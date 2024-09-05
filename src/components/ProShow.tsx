import React from "react";
import revanth from "../../public/assets/proshow1.png";
import proShow1 from "../../public/assets/paranox.svg";
import proShow2 from "../../public/assets/funkd.svg";
import { Monoton } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

const ProShowsList = [
    {
        day: "Day 1",
        aboutDay:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum reprehenderit ipsum enim ratione necessitatibus!",
        guestImage: revanth.src,
        events: "50+ EVENTS",
        countries: "10+ COUNTRIES",
        guestInfo: {
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque soluta",
            name: "LV REVANTH",
            aboutGuest:
                'L. V. Revanth, an Indian playback singer  has sung around 200 songs for Telugu films. His notable works include "Vey Vey Debbaku Debba", "Ruler", "Manohari" and "Telisiney Na Nuvvey".',
        },
    },
    {
        day: "Day 2",
        aboutDay:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum reprehenderit ipsum enim ratione necessitatibus!",
        guestImage: proShow1.src,
        events: "50+ EVENTS",
        countries: "10+ COUNTRIES",
        guestInfo: {
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque soluta",
            name: "DJ PARANOX",
            aboutGuest:
                "Multi award-winning DJ & Music Producer from India, who has carved a niche for himself in Indian Electronic Music. His music releases has been featured on platforms inclusion Zee Music Company, BBC Asian Network, Rolling Stones India, Red Indies & VH1.",
        },
    },
] as const;

const ProShows = () => {
    return (
        <div className="Sec">
            <h1 className="mb-10 font-bold">PROSHOWS</h1>
            <div className="pro" id="wrapper">
                {ProShowsList.map((proshow, index) => (
                    <div className="proshows-item" key={index}>
                        <div className="proshows-item-day-info">
                            <h1>{proshow.day}</h1>
                            <p>{proshow.aboutDay}</p>
                            <img src={proshow.guestImage} alt="Guest Image" />
                        </div>
                        <div className="proshows-item-about">
                            <h1>
                                {proshow.events} <br /> {proshow.countries}
                            </h1>
                            <div className="proshows-about-div">
                                <div className="proshows-guest-info">
                                    <p className="proshows-guest-info-para">
                                        {proshow.guestInfo.para}
                                    </p>
                                    <div>
                                        <h1>{proshow.guestInfo.name}</h1>
                                    </div>
                                    <p>{proshow.guestInfo.aboutGuest}</p>
                                </div>
                                <div className="lineup">
                                    <span className={monoton.className}>LINEUP</span>
                                </div>
                            </div>
                            <div className="call-to-action">
                                <button className="proshows-register">Register</button>
                                <button className="proshows-lineup">VIEW FULL LINEUP</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    // return (
    //     <div className="w-full">
    //         <h1 className={cn(monoton.className, "text-4xl md:text-5xl p-16 text-yellow")}>
    //             PROSHOWS
    //         </h1>
    //         <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
    //             <div
    //                 className={`w-full aspect-[${proshowDay1.width}/${proshowDay1.height}] relative`}
    //             >
    //                 <Image
    //                     src={proshowDay1}
    //                     fill
    //                     alt="Proshow Image"
    //                     className="object-cover object-center"
    //                 />
    //             </div>
    //             <div
    //                 className={`w-full aspect-[${proshowDay1.width}/${proshowDay1.height}] relative`}
    //             >
    //                 <Image
    //                     src={proshowDay1}
    //                     fill
    //                     alt="Proshow Image"
    //                     className="object-cover object-center"
    //                 />
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default ProShows;
