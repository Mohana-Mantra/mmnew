import { SPOTEVENTS, TECHNOHOLIC, WORKSHOPS } from "@/lib/eventsDetails";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { IconClock } from "@tabler/icons-react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const SubEventDetails = ({
    params: { subevent, details },
}: {
    params: { subevent: "spotevents" | "workshops"; details: string };
}) => {
    if (subevent === "spotevents") {
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
                    <div className="w-1/2 max-h-[500px] aspect-square relative rounded-xl">
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
                            {event.eventName === "TELEMATCH" && (
                                <ul
                                    className={`${poppins.className} list-disc pl-16 pt-4 text-base text-white`}
                                >
                                    <li>ADVENTURE RUN</li>
                                    <li>HUMAN WHEELBARROW RACE</li>
                                    <li>THAG OF WAR</li>
                                    <li>MUSICAL CHAIR</li>
                                    <li>LEMON & SPOON</li>
                                    <li>GUNNY BAG</li>
                                    <li>BALLON POPPING</li>
                                    <li>BALLON ATTACK</li>
                                    <li>CARRY PERSON RUN</li>
                                    <li>3 LEGGED RACE</li>
                                    <li>SPOON RELAY</li>
                                    <li>HANGING SWEET</li>
                                    <li>WATER BALLON CATCH</li>
                                </ul>
                            )}
                            {event.eventName === "FUN GAMES" && (
                                <ul
                                    className={`${poppins.className} list-disc pl-16 pt-4 text-base text-white`}
                                >
                                    <li>BUBBLE SHOOTER</li>
                                    <li>FIND THE CORRECT KEY</li>
                                    <li>GUESS THE THINGS</li>
                                    <li>HIT THE TARGET</li>
                                    <li>BASKET BALL</li>
                                    <li>PEN & CAP</li>
                                    <li>SQUEEZE IT</li>
                                    <li>BALLOON PYRAMID</li>
                                    <li>OREO BITE</li>
                                    <li>HAND-EYE COORDINATION GAME</li>
                                    <li>PULL UP STAND</li>
                                    <li>SEPARATION ANXIETY</li>
                                    <li>UNTIE THE KNOT</li>
                                    <li>JENGA</li>
                                    <li>HANG OVER</li>
                                    <li>BOWLING BALL</li>
                                    <li>SAREE DROPPING</li>
                                    <li>FACE ILLUSION</li>
                                    <li>BLINDFOLD BEAUTY</li>
                                    <li>HAND & LEG HOPSCOTCH</li>
                                    <li>KNOCK DOWN THE CUPS</li>
                                    <li>CHOCOLATE CHOPSTICK</li>
                                    <li>CHANDELIER</li>
                                    <li>SPOON FROG</li>
                                    <li>CHOP STACK</li>
                                    <li>EXTREME CHRISTMAS NUTSTACKER</li>
                                    <li>STACK ATTACK</li>
                                </ul>
                            )}
                        </h1>
                        <div>
                            <h1 className="font-sulpher font-bold text-2xl text-secondary">
                                About:
                            </h1>
                            <p className={`${poppins.className} text-sm tracking-wider`}>
                                {event.about}
                            </p>
                        </div>
                        <div>
                            <h1 className="font-sulpher font-bold text-2xl text-secondary">
                                How To Play:
                            </h1>
                            <p className={`${poppins.className} text-sm tracking-wider`}>
                                {event.howToPlay}
                            </p>
                        </div>
                        <div className="flex justify-between items-center h-fit">
                            <div>
                                {/* <div className="flex items-center h-fit gap-4">
                                    <Image
                                        src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133425/icons/mqmmcdjyqxydptuic0aq.svg"
                                        height={16}
                                        width={16}
                                        alt="icon"
                                    />
                                </div> */}
                                <div className="flex items-center h-fit gap-2">
                                    <IconClock size={20} className="text-secondary" />
                                    <p className={`${poppins.className} text-sm`}>
                                        09:00 AM - 04:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-sulpher font-bold text-secondary text-3xl">
                                Rules:
                            </h1>
                            <ol className="list-disc pl-8 text-xl">
                                {event.rules.map((rule, index) => (
                                    <li
                                        key={index}
                                        className={`${poppins.className} text-sm tracking-wider`}
                                    >
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

    if (subevent === "workshops") {
        const workShopEvent = WORKSHOPS.find((event) => event.slug === details);
        const techEvent = TECHNOHOLIC.find((event) => event.slug === details);
        if (!workShopEvent && !techEvent) {
            return (
                <div className="min-h-screen w-full flex items-center justify-center text-3xl md:text-6xl font-bold font-sulpher text-yellow">
                    Event not found
                </div>
            );
        }
        if (workShopEvent) {
            const index = WORKSHOPS.findIndex((event) => event.slug === details);
            const eventD = WORKSHOPS[index];

            return (
                <div className="w-full px-3 md:px-20 lg:px-60 pt-36">
                    {index === 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="w-full aspect-square relative rounded-xl">
                                <Image
                                    src={WORKSHOPS[0].image}
                                    fill
                                    alt={WORKSHOPS[0].slug}
                                    className="object-cover rounded-xl"
                                />
                            </div>
                            <div className="flex w-full flex-col gap-12 justify-center my-6 ">
                                <h1 className="font-sulpher font-bold text-yellow text-3xl md:text-5xl">
                                    {WORKSHOPS[0].eventName}
                                </h1>
                                <div>
                                    <h1 className="font-sulpher font-bold text-xl text-secondary">
                                        About:
                                    </h1>
                                    <p className="font-sulpher">{WORKSHOPS[0].about}</p>
                                </div>
                                <div>
                                    <h1 className="font-sulpher font-bold text-xl text-secondary">
                                        How To Play:
                                    </h1>
                                    <p className="font-sulpher">{WORKSHOPS[0].howToPlay}</p>
                                </div>
                                <div className="flex justify-between items-center h-fit">
                                    <div>
                                        <div className="flex items-center h-fit gap-4">
                                            <Image
                                                src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133425/icons/mqmmcdjyqxydptuic0aq.svg"
                                                height={16}
                                                width={16}
                                                alt="icon"
                                            />
                                            <p>{WORKSHOPS[0].venue}</p>
                                        </div>
                                        <div className="flex items-center h-fit gap-4">
                                            <Image
                                                src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133426/icons/fc2lzpiqbj6yjuzxe0gp.svg"
                                                height={16}
                                                width={16}
                                                alt="icon"
                                            />
                                            <p>09:00 AM - 04:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="font-sulpher font-bold text-secondary text-2xl">
                                        Rules:
                                    </h1>
                                    <ol className="list-disc pl-8">
                                        {workShopEvent.rules.map((rule, index) => (
                                            <li key={index} className="font-sulpher">
                                                {rule}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    )}
                    {(index === 1 || index === 2) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="w-full aspect-square relative rounded-xl">
                                <Image
                                    src={eventD.image}
                                    fill
                                    alt={eventD.slug}
                                    className="object-cover rounded-xl"
                                />
                            </div>
                            <div className="flex w-full flex-col gap-12 justify-center my-6 ">
                                <h1 className="font-sulpher font-bold text-yellow text-3xl md:text-5xl">
                                    {eventD.eventName}
                                </h1>
                                <div>
                                    <h1 className="font-sulpher font-bold text-xl text-secondary">
                                        About:
                                    </h1>
                                    <p className="font-sulpher">{eventD.about}</p>
                                </div>
                                {eventD.resoursePerson && (
                                    <div>
                                        <h1 className="font-sulpher font-bold text-xl text-secondary">
                                            Resourse Person:
                                        </h1>
                                        <span className="font-sulpher">
                                            <h1 className="text-xl">{eventD.resoursePerson[0]}</h1>
                                            <p className="text-sm font-light tracking-wide">
                                                {eventD.resoursePerson[1]}
                                            </p>
                                            <p className="text-sm font-light tracking-wide">
                                                {eventD.resoursePerson[2]}
                                            </p>
                                            <p className="text-sm font-light tracking-wide">
                                                {eventD.resoursePerson[3]}
                                            </p>
                                            <p className="text-sm font-light tracking-wide">
                                                {eventD.resoursePerson[4]}
                                            </p>
                                        </span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center h-fit">
                                    <div>
                                        <div className="flex items-center h-fit gap-4">
                                            <Image
                                                src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133425/icons/mqmmcdjyqxydptuic0aq.svg"
                                                height={16}
                                                width={16}
                                                alt="icon"
                                            />
                                            <p>{eventD.venue}</p>
                                        </div>
                                        <div className="flex items-center h-fit gap-4">
                                            <Image
                                                src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133426/icons/fc2lzpiqbj6yjuzxe0gp.svg"
                                                height={16}
                                                width={16}
                                                alt="icon"
                                            />
                                            <p>09:00 AM - 04:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="font-sulpher font-bold text-secondary text-2xl">
                                        Rules:
                                    </h1>
                                    <ol className="list-disc pl-8">
                                        {eventD.rules.map((rule, index) => (
                                            <li key={index} className="font-sulpher">
                                                {rule}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        if (techEvent) {
            const index = TECHNOHOLIC.findIndex((event) => event.slug === details);
            console.log(index);

            return (
                <>
                    {index === 5 && (
                        <div className="w-full px-3 md:px-20 lg:px-60 pt-36">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="w-full aspect-square relative rounded-xl">
                                    <Image
                                        src={techEvent.image}
                                        fill
                                        alt={techEvent.slug}
                                        className="object-cover rounded-xl"
                                    />
                                </div>
                                <div className="flex w-full flex-col gap-12 justify-center my-6 ">
                                    <h1 className="font-sulpher font-bold text-yellow text-3xl md:text-5xl">
                                        {techEvent.eventName}
                                    </h1>
                                    <div>
                                        <h1 className="font-sulpher font-bold text-xl text-secondary">
                                            About:
                                        </h1>
                                        <p className="font-sulpher">{techEvent.about}</p>
                                    </div>
                                    <div className="flex justify-between items-center h-fit">
                                        <div>
                                            <div className="flex items-center h-fit gap-4">
                                                <Image
                                                    src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133425/icons/mqmmcdjyqxydptuic0aq.svg"
                                                    height={16}
                                                    width={16}
                                                    alt="icon"
                                                />
                                                <p>{techEvent.date}</p>
                                            </div>
                                            <div className="flex items-center h-fit gap-4">
                                                <Image
                                                    src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133426/icons/fc2lzpiqbj6yjuzxe0gp.svg"
                                                    height={16}
                                                    width={16}
                                                    alt="icon"
                                                />
                                                <p>{techEvent.date2}</p>
                                            </div>
                                            <div className="flex items-center h-fit gap-4">
                                                <Image
                                                    src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133426/icons/fc2lzpiqbj6yjuzxe0gp.svg"
                                                    height={16}
                                                    width={16}
                                                    alt="icon"
                                                />
                                                <p>{techEvent.venue}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="font-sulpher font-bold text-secondary text-2xl">
                                            Rules:
                                        </h1>
                                        <ol className="list-disc pl-8">
                                            {techEvent.rules_and_regulations?.map((rule, index) => (
                                                <li key={index} className="font-sulpher">
                                                    {rule}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {index === 6 && (
                        <div className="w-full px-3 md:px-20 lg:px-60 pt-36">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="w-full aspect-square relative rounded-xl">
                                    <Image
                                        src={techEvent.image}
                                        fill
                                        alt={techEvent.slug}
                                        className="object-cover rounded-xl"
                                    />
                                </div>
                                <div className="flex w-full flex-col gap-12 justify-center my-6 ">
                                    <h1 className="font-sulpher font-bold text-yellow text-3xl md:text-5xl">
                                        {techEvent.eventName}
                                    </h1>
                                    <div>
                                        <h1 className="font-sulpher font-bold text-xl text-secondary">
                                            About:
                                        </h1>
                                        <p className="font-sulpher">{techEvent.about}</p>
                                    </div>
                                    <div>
                                        <h1 className="font-sulpher font-bold text-xl text-secondary">
                                            How To Play:
                                        </h1>
                                        <p className="font-sulpher">{techEvent.howToPlay}</p>
                                    </div>
                                    <div className="flex justify-between items-center h-fit">
                                        <div>
                                            <div className="flex items-center h-fit gap-4">
                                                <Image
                                                    src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133425/icons/mqmmcdjyqxydptuic0aq.svg"
                                                    height={16}
                                                    width={16}
                                                    alt="icon"
                                                />
                                                <p>{techEvent.venue}</p>
                                            </div>
                                            <div className="flex items-center h-fit gap-4">
                                                <Image
                                                    src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133426/icons/fc2lzpiqbj6yjuzxe0gp.svg"
                                                    height={16}
                                                    width={16}
                                                    alt="icon"
                                                />
                                                <p>{techEvent.venue2}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="font-sulpher font-bold text-secondary text-2xl">
                                            Rules:
                                        </h1>
                                        <ol className="list-disc pl-8">
                                            {techEvent.rules?.map((rule, index) => (
                                                <li key={index} className="font-sulpher">
                                                    {rule}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {index !== 6 && index !== 5 && (
                        <div className="w-full px-3 md:px-20 lg:px-60 pt-36">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="w-full aspect-square relative rounded-xl">
                                    <Image
                                        src={techEvent.image}
                                        fill
                                        alt={techEvent.slug}
                                        className="object-cover rounded-xl"
                                    />
                                </div>
                                <div className="flex w-full flex-col gap-12 justify-center my-6 ">
                                    <h1 className="font-sulpher font-bold text-yellow text-3xl md:text-5xl">
                                        {techEvent.eventName}
                                    </h1>
                                    <div>
                                        <h1 className="font-sulpher font-bold text-xl text-secondary">
                                            About:
                                        </h1>
                                        <p className="font-sulpher">{techEvent.about}</p>
                                    </div>
                                    <div>
                                        <h1 className="font-sulpher font-bold text-xl text-secondary">
                                            How To Play:
                                        </h1>
                                        <p className="font-sulpher">{techEvent.howToPlay}</p>
                                    </div>
                                    <div className="flex justify-between items-center h-fit">
                                        <div>
                                            <div className="flex items-center h-fit gap-4">
                                                <Image
                                                    src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133425/icons/mqmmcdjyqxydptuic0aq.svg"
                                                    height={16}
                                                    width={16}
                                                    alt="icon"
                                                />
                                                <p>{techEvent.venue}</p>
                                            </div>
                                            <div className="flex items-center h-fit gap-4">
                                                <Image
                                                    src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133426/icons/fc2lzpiqbj6yjuzxe0gp.svg"
                                                    height={16}
                                                    width={16}
                                                    alt="icon"
                                                />
                                                <p>09:00 AM - 04:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="font-sulpher font-bold text-secondary text-2xl">
                                            Rules:
                                        </h1>
                                        <ol className="list-disc pl-8">
                                            {techEvent.rules?.map((rule, index) => (
                                                <li key={index} className="font-sulpher">
                                                    {rule}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            );
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center text-yellow text-4xl md:text-7xl font-anybody">
            Event not found
        </div>
    );
};

export default SubEventDetails;
