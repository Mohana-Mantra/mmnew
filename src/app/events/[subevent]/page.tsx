import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { KALAKSHETRAEVENTS, SPOTEVENTS, WORKSHOPS, TECHNOHOLIC } from "@/lib/eventsDetails";
import { cn } from "@/lib/utils";
import { Monoton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

export default function AllEvents({ params }: { params: any }) {
    const { subevent } = params;

    const loader = () => {
        return <div className="w-full h-full bg-slate-700 animate-pulse"></div>;
    };

    if (subevent === "kalakshetra") {
        return (
            <div className="py-8 px-4 md:px-16 lg:px-40 md:py-32 space-y-6">
                <GradualSpacing
                    text={subevent}
                    className={cn(
                        "text-center capitalize text-2xl md:text-5xl tracking-tighter text-yellow",
                        monoton.className
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-20">
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
                                                        src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133425/icons/mqmmcdjyqxydptuic0aq.svg"
                                                        height={16}
                                                        width={16}
                                                        alt="icon"
                                                    />
                                                    <p>{event.day}</p>
                                                </div>
                                                <div className="flex items-center h-fit gap-4">
                                                    <Image
                                                        src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133430/icons/eezseuk4hioa3akqlfhq.svg"
                                                        height={16}
                                                        width={16}
                                                        alt="icon"
                                                    />
                                                    <p>{event.venue}</p>
                                                </div>
                                                <div className="flex items-center h-fit gap-4">
                                                    <Image
                                                        src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133426/icons/fc2lzpiqbj6yjuzxe0gp.svg"
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
                                    <h1 className="font-bold text-xl">How to Play and Rules:</h1>
                                    <ol className="list-disc !ml-8">
                                        {event.rules.map((rule, index) => (
                                            <li key={index}>{rule}</li>
                                        ))}
                                    </ol>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        );
    }
    //spots events list
    if (subevent === "spotevents") {
        return (
            <div className="py-8 px-4 md:px-16 lg:px-40 md:py-32 space-y-6">
                <div>
                    <GradualSpacing
                        text={subevent}
                        className={cn(
                            "text-center capitalize text-2xl md:text-5xl tracking-tighter text-yellow",
                            monoton.className
                        )}
                    />
                    <p className=" font-bold text-white text-center mt-4">
                        The following events run throughout the three days.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-20">
                    {SPOTEVENTS.map((event, index) => (
                        <Link
                            href={`${subevent}/${event.slug}`}
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
                </div>
            </div>
        );
    }

    if (subevent === "workshops") {
        return (
            <div className="py-8 px-4 md:px-16 lg:px-40 md:py-32 space-y-6">
                <GradualSpacing
                    text={subevent}
                    className={cn(
                        "text-center capitalize text-2xl md:text-5xl tracking-tighter text-yellow",
                        monoton.className
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-20">
                    <Link
                        href={`/events/workshops/${WORKSHOPS[0].slug}`}
                        className="space-y-2 rounded-lg  hover:scale-105 transition-transform duration-300 ease-out"
                    >
                        <div className="relative aspect-square w-full cursor-pointer">
                            <Image
                                src={WORKSHOPS[0].image}
                                alt={WORKSHOPS[0].eventName}
                                fill
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-2 rounded-lg">
                            <h3 className="text-white text-2xl text-center font-bold">
                                {WORKSHOPS[0].eventName}
                            </h3>
                            <p className="text-white">09:00 AM - 04:00 PM</p>
                        </div>
                    </Link>
                    <Link
                        href={`/events/workshops/${WORKSHOPS[1].slug}`}
                        className="space-y-2 rounded-lg  hover:scale-105 transition-transform duration-300 ease-out"
                    >
                        <div className="relative aspect-square w-full cursor-pointer">
                            <Image
                                src={WORKSHOPS[1].image}
                                alt={WORKSHOPS[1].eventName}
                                fill
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-2 rounded-lg">
                            <h3 className="text-white text-2xl text-center font-bold">
                                {WORKSHOPS[1].eventName}
                            </h3>
                            <p className="text-white">09:00 AM - 04:00 PM</p>
                        </div>
                    </Link>
                    <Link
                        href={`/events/workshops/${WORKSHOPS[2].slug}`}
                        className="space-y-2 rounded-lg  hover:scale-105 transition-transform duration-300 ease-out"
                    >
                        <div className="relative aspect-square w-full cursor-pointer">
                            <Image
                                src={WORKSHOPS[2].image}
                                alt={WORKSHOPS[2].eventName}
                                fill
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-2 rounded-lg">
                            <h3 className="text-white text-2xl text-center font-bold">
                                {WORKSHOPS[2].eventName}
                            </h3>
                            <p className="text-white">09:00 AM - 04:00 PM</p>
                        </div>
                    </Link>
                </div>

                <GradualSpacing
                    text="technoholic"
                    className={cn(
                        "text-center capitalize text-2xl md:text-5xl tracking-tighter mt-6 md:mt-12 text-yellow",
                        monoton.className
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-20">
                    {TECHNOHOLIC.map((event, index) => (
                        <Link
                            href={`${subevent}/${event.slug}`}
                            className="space-y-2 rounded-lg  hover:scale-105 transition-transform duration-300 ease-out"
                            key={event.slug + index}
                        >
                            <div className="relative aspect-square w-full cursor-pointer">
                                <Image
                                    src={event.image}
                                    alt={event.slug}
                                    fill
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
                </div>
            </div>
        );
    }
}
