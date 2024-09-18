"use client";
import { useEffect, useState } from "react";

const StickyCountdown = () => {
    const getDays = () => {
        const now = new Date();
        const targetDate = new Date(2024, 9, 3);
        const timeDifference = targetDate.getTime() - now.getTime();
        if (timeDifference < 0) {
            return { hours: 0, minutes: 0, seconds: 0 };
        }
        const totalSeconds = Math.floor(timeDifference / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds };
    };
    const [count, setCount] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        setInterval(() => {
            const timer = getDays();
            setCount(timer);
        }, 1000);
    }, [count]);

    useEffect(() => {
        const mainBody = document.querySelector("#main-body");
        mainBody.addEventListener("scroll", (dets) => {
            console.log(dets);
        });
    }, []);

    if (count.days === 0 && count.hours === 0 && count.minutes === 0 && count.seconds === 0) {
        return null;
    }

    return (
        <div className="fixed bottom-2 left-2 z-50 bg-white/35 pointer-events-none backdrop-blur-3xl flex flex-col items-cente rounded-lg p-3">
            <div className="flex gap-4 h-fit items-center">
                <div className="flex flex-col items-center">
                    <h1 className="bg-white text-primary font-bold text-center rounded-lg text-xl p-3">
                        {count.days > 9 ? count.days : `0${count.days}`}
                    </h1>
                    <span className="text-black">Days</span>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="bg-white text-primary font-bold text-center rounded-lg text-xl p-3">
                        {count.hours > 9 ? count.hours : `0${count.hours}`}
                    </h1>
                    <span className="text-black">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="bg-white text-primary font-bold text-center rounded-lg text-xl p-3">
                        {count.minutes > 9 ? count.minutes : `0${count.minutes}`}
                    </h1>
                    <span className="text-black">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="bg-white text-primary font-bold text-center rounded-lg text-xl p-3">
                        {count.seconds > 9 ? count.seconds : `0${count.seconds}`}
                    </h1>
                    <span className="text-black">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default StickyCountdown;
