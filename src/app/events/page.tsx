import { CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import placeHolder from "../../../public/assets/placeholder.png";
import Kalakshetra from "../../../public/assets/kalakshetra.png";
import Workshop from "../../../public/assets/workshops.png";
import Spotenevts from "../../../public/assets/spotevents.png";
import { cn } from "@/lib/utils";
import { Monoton } from "next/font/google";

const monoton = Monoton({ weight: ["400"], subsets: ["latin"] });

export default function Events() {
    const eventsList = [
        { title: "Kalakshetra", image: Kalakshetra.src, link: "/events/kalakshetra" },
        { title: "Workshops & Tech", image: Workshop.src, link: "/events/workshops" },
        // { title: "Tech", image: placeHolder.src, link: "/events/tech" },
        { title: "SpotEvents", image: Spotenevts.src, link: "/events/spotevents" },
    ];

    return (
        <div className="py-8 px-4 md:py-28 space-y-6">
            <section className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center w-full gap-4 md:gap-12 px-4 md:px-24 lg:px-[10rem]">
                {eventsList.map((event, index) => {
                    return (
                        <Link href={event.link} key={index}>
                            <CardContainer
                                key={index}
                                className={cn(
                                    "w-full bg-gradient-to-br from-[rgba(255,255,255,20)] to-[rgba(255,255,255,0)] rounded-[20px]",
                                    "card-container-events"
                                )}
                            >
                                <div className="w-full p-6 backdrop-blur-[150px] rounded-[20px]">
                                    <CardItem className="aspect-[3000/4500] w-full rounded-lg">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            typeof="video/mp4"
                                            className="w-full h-full object-cover rounded-lg object-center"
                                        >
                                            <source src="../../../assets/spotevents.mp4" />
                                        </video>
                                    </CardItem>
                                    {/* <CardItem
                                        as="h1"
                                        className={cn(
                                            monoton.className,
                                            "text-center text-yellow w-full text-2xl mt-4"
                                        )}
                                    >
                                        {event.title}
                                    </CardItem> */}
                                </div>
                            </CardContainer>
                        </Link>
                    );
                })}
            </section>
        </div>
    );
}
