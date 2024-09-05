import { CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import placeHolder from "../../../public/assets/placeholder.png";
import { cn } from "@/lib/utils";
import { Monoton } from "next/font/google";

const monoton = Monoton({ weight: ["400"], subsets: ["latin"] });

export default function Events() {
    const eventsList = [
        { title: "Kalakshetra", image: placeHolder.src, link: "/events/kalakshetra" },
        { title: "Workshops", image: placeHolder.src, link: "/events/workshops" },
        { title: "Tech", image: placeHolder.src, link: "/events/tech" },
        { title: "SpotEvents", image: placeHolder.src, link: "/events/spotevents" },
    ];

    return (
        <div className="py-8 px-4 md:py-28 space-y-6">
            <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full gap-4 md:gap-10 px-4 md:px-40 lg:px-72">
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
                                    <CardItem className="aspect-[7/8] w-full rounded-lg">
                                        <Image
                                            fill
                                            src={event.image}
                                            alt={event.title}
                                            className="rounded-lg"
                                        />
                                    </CardItem>
                                    <CardItem
                                        as="h1"
                                        className={cn(
                                            monoton.className,
                                            "text-center text-yellow w-full text-2xl mt-4"
                                        )}
                                    >
                                        {event.title}
                                    </CardItem>
                                </div>
                            </CardContainer>
                        </Link>
                    );
                })}
            </section>
        </div>
    );
}
