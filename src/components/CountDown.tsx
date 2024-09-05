"use client";
import { cn } from "@/lib/utils";
import { Monoton } from "next/font/google";
import { useEffect, useState } from "react";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

function CountDown() {
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

    // useEffect(() => {
    //     setInterval(() => {
    //         const countDown = getDays();
    //         setCount({
    //             days: countDown.days,
    //             hours: countDown.hours,
    //             minutes: countDown.minutes,
    //             seconds: countDown.seconds,
    //         });
    //     }, 1000);
    // }, [count]);

    useEffect(() => {
        var target_date = new Date(2024, 9, 3);
        // var target_date = new Date().getTime() + 1000 * 3600 * 48;
        var days, hours, minutes, seconds; // variables for time units

        var countdown = document.getElementById("tiles"); // get tag element

        getCountdown();

        setInterval(function () {
            getCountdown();
        }, 1000);

        function getCountdown() {
            // find the amount of "seconds" between now and target
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;

            days = pad(parseInt(seconds_left / 86400));
            seconds_left = seconds_left % 86400;

            hours = pad(parseInt(seconds_left / 3600));
            seconds_left = seconds_left % 3600;

            minutes = pad(parseInt(seconds_left / 60));
            seconds = pad(parseInt(seconds_left % 60));

            // format countdown string + set tag value
            countdown.innerHTML =
                "<span>" +
                days +
                "</span><span>" +
                hours +
                "</span><span>" +
                minutes +
                "</span><span>" +
                seconds +
                "</span>";
        }

        function pad(n) {
            return (n < 10 ? "0" : "") + n;
        }
    }, []);

    return (
        <div className="my-20 fixed z-50 bottom-0 left-0 !overflow-x-hidden">
            <h1
                className={`${monoton.className} text-4xl md:text-5xl text-yellow mb-10 text-center`}
            >
                COUNTDOWN
            </h1>
            <div id="countdown">
                <div id="tiles"></div>
                <div className="labels">
                    <li>Days</li>
                    <li>Hours</li>
                    <li>Mins</li>
                    <li>Secs</li>
                </div>
            </div>
        </div>
    );
}

export default CountDown;
