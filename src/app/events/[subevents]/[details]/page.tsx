import Image from "next/image";
import { SPOTEVENTS, WORKSHOPS } from "@/lib/eventsDetails";
import Calender from "../../../../../public/assets/icons/calendar-lines.svg";
import Time from "../../../../../public/assets/icons/clock-three.svg";
// import Location from "../../../../public/assets/icons/map-marker.svg";

const SubEventDetails = ({
    params: { subevents, details },
}: {
    params: { subevents: "spotevents" | "workshops"; details: string };
}) => {
    if (subevents === "spotevents") {
        const event = SPOTEVENTS.find((event) => event.slug === details);
        if (!event) {
            return (
                <div className="min-h-screen w-full flex items-center justify-center text-3xl md:text-6xl font-bold font-sulpher text-yellow">
                    Event not found
                </div>
            );
        }
        return (
            <div className="w-full px-3 md:px-20 lg:px-60 pt-36">
                <div className="flex gap-10">
                    <div className="w-1/2 aspect-square relative rounded-xl">
                        <Image
                            src={event.image}
                            fill
                            alt={event.slug}
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="flex w-1/2 flex-col gap-12 justify-center my-6 ">
                        <h1 className="font-sulpher font-bold text-yellow text-3xl md:text-5xl">
                            {event.eventName}
                        </h1>
                        <div>
                            <h1 className="font-sulpher font-bold text-2xl text-secondary">
                                About:
                            </h1>
                            <p className="font-sulpher text-lg">{event.about}</p>
                        </div>
                        <div>
                            <h1 className="font-sulpher font-bold text-2xl text-secondary">
                                How To Play:
                            </h1>
                            <p className="font-sulpher text-lg">{event.howToPlay}</p>
                        </div>
                        <div className="flex justify-between items-center h-fit">
                            <div>
                                <div className="flex items-center h-fit gap-4">
                                    <Image src={Calender} height={16} width={16} alt="icon" />
                                    <p>Day 1 & 2</p>
                                </div>
                                <div className="flex items-center h-fit gap-4">
                                    <Image src={Time} height={16} width={16} alt="icon" />
                                    <p>09:00 AM - 04:00 PM</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-sulpher font-bold text-secondary text-3xl">
                                Rules:
                            </h1>
                            <ol className="list-disc pl-8 text-xl">
                                {event.rules.map((rule, index) => (
                                    <li key={index} className="font-sulpher">
                                        {rule}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (subevents === "workshops") {
        const event = WORKSHOPS.find((event) => event.slug === details);
        if (!event) {
            return (
                <div className="min-h-screen w-full flex items-center justify-center text-3xl md:text-6xl font-bold font-sulpher text-yellow">
                    Event not found
                </div>
            );
        }
        return (
            <div className="w-full px-3 md:px-20 lg:px-60 pt-36">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="w-full aspect-square relative rounded-xl">
                        <Image
                            src={event.image}
                            fill
                            alt={event.slug}
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-12 justify-center my-6 ">
                        <h1 className="font-sulpher font-bold text-yellow text-3xl md:text-5xl">
                            {event.eventName}
                        </h1>
                        <div>
                            <h1 className="font-sulpher font-bold text-xl text-secondary">
                                About:
                            </h1>
                            <p className="font-sulpher">{event.about}</p>
                        </div>
                        <div>
                            <h1 className="font-sulpher font-bold text-xl text-secondary">
                                How To Play:
                            </h1>
                            <p className="font-sulpher">{event.howToPlay}</p>
                        </div>
                        <div className="flex justify-between items-center h-fit">
                            <div>
                                <div className="flex items-center h-fit gap-4">
                                    <Image src={Calender} height={16} width={16} alt="icon" />
                                    <p>Day 1 & 2</p>
                                </div>
                                <div className="flex items-center h-fit gap-4">
                                    <Image src={Time} height={16} width={16} alt="icon" />
                                    <p>09:00 AM - 04:00 PM</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-sulpher font-bold text-secondary text-2xl">
                                Rules:
                            </h1>
                            <ol className="list-disc pl-8">
                                {event.rules.map((rule, index) => (
                                    <li key={index} className="font-sulpher">
                                        {rule}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center text-yellow text-4xl md:text-7xl font-anybody">
            Event not found
        </div>
    );
};

export default SubEventDetails;
