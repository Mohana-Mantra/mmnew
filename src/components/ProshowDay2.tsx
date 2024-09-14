// "use client";
// import proShow1 from "../../public/assets/paranox.svg";
// import proShow2 from "../../public/assets/funkd.svg";
// import { Monoton } from "next/font/google";
// import { useEffect, useState } from "react";

// const monoton = Monoton({ subsets: ["latin"], weight: "400" });

// const ProShowsDay2Guest1 = {
//     day: "Day 2",
//     aboutDay:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum reprehenderit ipsum enim ratione necessitatibus!",
//     guestImage: proShow1.src,
//     events: "50+ EVENTS",
//     countries: "10+ COUNTRIES",
//     guestInfo: {
//         para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque soluta",
//         name: "DJ PARANOX",
//         aboutGuest:
//             "Multi award-winning DJ & Music Producer from India, who has carved a niche for himself in Indian Electronic Music. His music releases has been featured on platforms inclusion Zee Music Company, BBC Asian Network, Rolling Stones India, Red Indies & VH1.",
//     },
// };

// const ProShowsDay2Guest2 = {
//     day: "Day 2",
//     aboutDay:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum reprehenderit ipsum enim ratione necessitatibus!",
//     guestImage: proShow2.src,
//     events: "50+ EVENTS",
//     countries: "10+ COUNTRIES",
//     guestInfo: {
//         para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque soluta",
//         name: "DJ FUNK'D",
//         aboutGuest:
//             "Multi award-winning DJ & Music Producer from India, who has carved a niche for himself in Indian Electronic Music. His music releases has been featured on platforms inclusion Zee Music Company, BBC Asian Network, Rolling Stones India, Red Indies & VH1.",
//     },
// };

// const ProshowDay2 = () => {
//     const [day2, setDay2] = useState(ProShowsDay2Guest1);
//     useEffect(() => {
//         const proshowItem = document.getElementById("proshow-item-day2");
//         proshowItem?.addEventListener("mouseenter", () => {
//             console.log("hovered");
//             setDay2(ProShowsDay2Guest2);
//         });

//         proshowItem?.addEventListener("mouseleave", () => {
//             console.log("unhovered");
//             setDay2(ProShowsDay2Guest1);
//         });
//     }, [day2]);

//     return (
//         <div className="proshows-item" id="proshow-item-day2">
//             <div className="proshows-item-day-info">
//                 <h1>{day2.day}</h1>
//                 <p>{day2.aboutDay}</p>
//                 <img src={day2.guestImage} alt="Guest Image" />
//             </div>
//             <div className="proshows-item-about">
//                 <h1>
//                     {day2.events} <br /> {day2.countries}
//                 </h1>
//                 <div className="proshows-about-div">
//                     <div className="proshows-guest-info">
//                         <p className="proshows-guest-info-para">{day2.guestInfo.para}</p>
//                         <div>
//                             <h1>{day2.guestInfo.name}</h1>
//                         </div>
//                         <p>{day2.guestInfo.aboutGuest}</p>
//                     </div>
//                     <div className="lineup">
//                         <span className={monoton.className}>LINEUP</span>
//                     </div>
//                 </div>
//                 <div className="call-to-action">
//                     <button className="proshows-register">Register</button>
//                     <button className="proshows-lineup">VIEW FULL LINEUP</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProshowDay2;
