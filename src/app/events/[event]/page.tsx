import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from "next/image";
import Calender from "../../../../public/assets/icons/calendar-lines.svg";
import Time from "../../../../public/assets/icons/clock-three.svg";
import Location from "../../../../public/assets/icons/map-marker.svg";
import { KALAKSHETRAEVENTS } from "@/lib/eventsDetails";
import { Monoton } from "next/font/google";
import { cn } from "@/lib/utils";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });
type TEvent = typeof KALAKSHETRAEVENTS;

export default function AllEvents({ params }: { params: any }) {
    const { event } = params;

    let eventsList: TEvent;
    switch (event) {
        case "kalakshetra":
            eventsList = KALAKSHETRAEVENTS;
            break;
        case "workshops":
            eventsList = KALAKSHETRAEVENTS;
            break;
        case "tech":
            eventsList = KALAKSHETRAEVENTS;
            break;
        case "spotevents":
            eventsList = KALAKSHETRAEVENTS;
            break;

        default:
            eventsList = [];
            break;
    }

    return (
        <div className="py-8 px-4 md:py-28 space-y-6">
            <GradualSpacing
                text={event}
                className={cn(
                    "text-center capitalize text-[3.538rem] md:text-5xl tracking-tighter text-yellow",
                    monoton.className
                )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-20">
                {eventsList.map((event, index) => (
                    <Dialog key={event.event + index}>
                        <DialogTrigger asChild>
                            <div className="space-y-2 rounded-lg">
                                <div className="relative aspect-square w-full cursor-pointer">
                                    <Image
                                        src={event.image}
                                        alt={event.event}
                                        fill
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col items-center rounded-lg">
                                    <h3 className="text-white text-2xl font-bold">{event.event}</h3>
                                    <p className="text-white text-sm">{event.timings}</p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="grid grid-cols-1 w-full md:w-auto md:grid-cols-2 h-fit md:flex-row bg-white">
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
                                            <Image src={Time} height={16} width={16} alt="icon" />
                                            <p>{event.timings}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return ["kalakshetra", "workshops", "tech", "spotevents"].map((event) => ({
        event,
    }));
}
