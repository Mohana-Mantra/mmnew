import React, { Suspense } from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const Xirod = localFont({
    src: "../../fonts/Xirod.otf",
    display: "swap",
});

const Spline = React.lazy(() => import("@splinetool/react-spline/next"));

export default function Hero() {
    return (
        <>
            <div className="h-screen relative w-full">
                <div className="video-background">
                    <video autoPlay loop muted playsInline>
                        <source src="https://res.cloudinary.com/dbjy9s3cz/video/upload/v1726134169/ra2cbms9kmmvhwzbxa8w.mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <Suspense fallback={<div className="h-screen absolute inset-0 bg-none" />}>
                    <Spline
                        scene="https://prod.spline.design/OxQV59a9KqPrdaYL/scene.splinecode"
                        className="absolute h-full w-full inset-0 z-0 !bg-none hidden lg:flex"
                    />
                </Suspense>
                <div className="h-screen absolute inset-0 bg-none flex flex-wrap items-center w-full justify-center z-0 lg:hidden">
                    <h1 className={cn("font-bold text-5xl text-center", Xirod.className)}>
                        MOHANA MANTRA
                    </h1>
                </div>
            </div>
        </>
    );
}
