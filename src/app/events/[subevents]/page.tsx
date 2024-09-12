import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from "next/image";
import Calender from "../../../../public/assets/icons/calendar-lines.svg";
import Time from "../../../../public/assets/icons/clock-three.svg";
import Location from "../../../../public/assets/icons/map-marker.svg";
import { KALAKSHETRAEVENTS, SPOTEVENTS, WORKSHOPS } from "@/lib/eventsDetails";
import { Monoton } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

export default function AllEvents({ params }: { params: any }) {
    const { subevents } = params;

    let eventsVar;
    if (subevents === "spotevents") {
        eventsVar = SPOTEVENTS;
    }
    if (subevents === "workshops") {
        eventsVar = WORKSHOPS;
    }

    const loader = () => {
        return <div className="w-full h-full bg-slate-700 animate-pulse"></div>;
    };

    return (
        <div className="py-8 px-4 md:px-16 lg:px-40 md:py-32 space-y-6">
            <GradualSpacing
                text={subevents}
                className={cn(
                    "text-center capitalize text-2xl md:text-5xl tracking-tighter text-yellow",
                    monoton.className
                )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-20">
                {subevents === "kalakshetra" ? (
                    <>
                        {KALAKSHETRAEVENTS.map((event, index) => (
                            <Dialog key={event.event + index}>
                                <DialogTrigger asChild>
                                    <div className="space-y-2 rounded-lg hover:scale-105 transition-transform duration-500 ease-out">
                                        <div className="relative aspect-square w-full cursor-pointer">
                                            <Image
                                                src={event.image}
                                                alt={event.event}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                placeholder="blur"
                                                blurDataURL={event.image}
                                                className="w-full h-64 object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center rounded-lg">
                                            <h3 className="text-white text-2xl text-center font-bold">
                                                {event.event}
                                            </h3>
                                            <p className="text-white">{event.timings}</p>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="w-full md:w-auto h-fit hover:scale-110 transition-transform duration-500 ease-out overflow-y-scroll md:overflow-auto bg-white">
                                    <div className="grid grid-cols-1 w-full md:w-auto gap-6 md:grid-cols-2 md:flex-row">
                                        <div className="h-full relative w-full">
                                            <Image
                                                src={event.image}
                                                fill
                                                alt={event.event}
                                                className="object-cover rounded-lg object-center"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-6 justify-between my-6 text-black">
                                            <h1 className="font-sulpher font-bold text-[#ff5f1f] text-3xl">
                                                {event.event}
                                            </h1>
                                            <p className="font-sulpher">{event.description}</p>
                                            <div className="flex justify-between items-center h-fit">
                                                <div>
                                                    <div className="flex items-center h-fit gap-4">
                                                        <Image
                                                            src={Calender}
                                                            height={16}
                                                            width={16}
                                                            alt="icon"
                                                        />
                                                        <p>{event.day}</p>
                                                    </div>
                                                    <div className="flex items-center h-fit gap-4">
                                                        <Image
                                                            src={Location}
                                                            height={16}
                                                            width={16}
                                                            alt="icon"
                                                        />
                                                        <p>{event.venue}</p>
                                                    </div>
                                                    <div className="flex items-center h-fit gap-4">
                                                        <Image
                                                            src={Time}
                                                            height={16}
                                                            width={16}
                                                            alt="icon"
                                                        />
                                                        <p>{event.timings}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-black">
                                        <h1 className="font-bold text-xl">
                                            How to Play and Rules:
                                        </h1>
                                        <ol className="list-disc !ml-8">
                                            {event.rules.map((rule, index) => (
                                                <li key={index}>{rule}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </>
                ) : (
                    <>
                        {eventsVar?.map((event, index) => (
                            <Link
                                href={`${subevents}/${event.slug}`}
                                className="space-y-2 rounded-lg  hover:scale-105 transition-transform duration-300 ease-out"
                                key={event.slug + index}
                            >
                                <div className="relative aspect-square w-full cursor-pointer">
                                    <Image
                                        src={event.image}
                                        alt={event.slug}
                                        fill
                                        // placeholder="blur"
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-2 rounded-lg">
                                    <h3 className="text-white text-2xl text-center font-bold">
                                        {event.eventName}
                                    </h3>
                                    <p className="text-white">09:00 AM - 04:00 PM</p>
                                </div>
                            </Link>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
