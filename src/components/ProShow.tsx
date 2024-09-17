"use client";
import { Monoton } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
// import revanth from "../../public/assets/proshow1.png";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

const proshowDay1 = {
    day: "Day 1",
    aboutDay:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum reprehenderit ipsum enim ratione necessitatibus!",
    // guestImage: revanth.src,
    events: "50+ EVENTS",
    countries: "10+ COUNTRIES",
    guestInfo: {
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque soluta",
        name: "LV REVANTH",
        aboutGuest:
            'L. V. Revanth, an Indian playback singer  has sung around 200 songs for Telugu films. His notable works include "Vey Vey Debbaku Debba", "Ruler", "Manohari" and "Telisiney Na Nuvvey".',
    },
};

const ProShows = () => {
    const [day2Img, setDay2Img] = useState({
        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133752/jologx6mpoanajsgtrx8.png",
        number: 1,
    });

    useEffect(() => {
        setInterval(() => {
            if (day2Img.number === 1) {
                setDay2Img({
                    image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133752/vnhtfn04zt626e5peiws.png",
                    number: 2,
                });
            } else {
                setDay2Img({
                    image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133752/jologx6mpoanajsgtrx8.png",
                    number: 1,
                });
            }
        }, 5000);
    }, [day2Img]);

    // return (
    //     <div className="Sec">
    //         <h1 className={cn("mb-10 font-bold", monoton.className)}>PROSHOWS</h1>
    //         <div className="pro" id="wrapper">
    //             <div className="proshows-item">
    //                 <div className="proshows-item-day-info">
    //                     <h1>{proshowDay1.day}</h1>
    //                     <p>{proshowDay1.aboutDay}</p>
    //                     <img src={proshowDay1.guestImage} alt="Guest Image" />
    //                 </div>
    //                 <div className="proshows-item-about">
    //                     <h1>
    //                         {proshowDay1.events} <br /> {proshowDay1.countries}
    //                     </h1>
    //                     <div className="proshows-about-div">
    //                         <div className="proshows-guest-info">
    //                             <p className="proshows-guest-info-para">
    //                                 {proshowDay1.guestInfo.para}
    //                             </p>
    //                             <div>
    //                                 <h1>{proshowDay1.guestInfo.name}</h1>
    //                             </div>
    //                             <p>{proshowDay1.guestInfo.aboutGuest}</p>
    //                         </div>
    //                         <div className="lineup">
    //                             <span className={monoton.className}>LINEUP</span>
    //                         </div>
    //                     </div>
    //                     <div className="call-to-action">
    //                         <button className="proshows-register">Register</button>
    //                         <button className="proshows-lineup">VIEW FULL LINEUP</button>
    //                     </div>
    //                 </div>
    //             </div>
    //             <ProshowDay2 />
    //         </div>
    //     </div>
    // );

    return (
        <div className="w-full h-fit">
            <h1 className={`${monoton.className} text-5xl text-yellow px-12 pt-12`}>PROSHOWS</h1>
            <div className="w-full grid h-auto grid-cols-1 md:grid-cols-2 gap-10 p-10">
                <div className={`w-full aspect-[1494/1158] relative`}>
                    <Image
                        src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133751/f7gk77gr3naijfp9rxeg.png"
                        alt="Hardcore"
                        fill
                    />
                </div>
                <div className={`w-full aspect-[1494/1158] relative`} id="samlpe">
                    <Image src={day2Img.image} alt="Hardcore" fill />
                </div>
            </div>
        </div>
    );
};

export default ProShows;
