"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import GradualSpacing from "./gradual-spacing";
import { Moul } from "next/font/google";

const moul = Moul({ weight: "400", subsets: ["latin"] });

export const ParallaxScroll = ({ images, className }: { images: string[]; className?: string }) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef, // remove this if your container is not fixed height
        offset: ["start start", "end start"], // remove this if your container is not fixed height
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -1000]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, 1000]);

    const third = Math.ceil(images.length / 3) + 1;

    const firstPart = images.slice(0, third + 1);
    const secondPart = images.slice(third + 1, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div className={cn("h-screen items-start overflow-y-auto w-full", className)} ref={gridRef}>
            <GradualSpacing
                text="Gallery"
                className={cn(
                    "text-center text-2xl pt-28 md:text-5xl tracking-tighter",
                    moul.className
                )}
            />
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-0 lg:gap-10 py-10 px-10"
                ref={gridRef}
            >
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }} // Apply the translateY motion value here
                            key={"grid-1" + idx}
                            className="aspect-[7008/4672] relative w-full"
                        >
                            <Image
                                src={el}
                                className="object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                                fill
                                alt="thumbnail"
                                priority
                                quality={50}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateSecond }}
                            key={"grid-2" + idx}
                            className="aspect-[7008/4672] relative w-full"
                        >
                            <Image
                                src={el}
                                className="object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                                alt="thumbnail"
                                fill
                                priority
                                quality={50}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateThird }}
                            key={"grid-3" + idx}
                            className="aspect-[7008/4672] relative w-full"
                        >
                            <Image
                                src={el}
                                className="object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                                alt="thumbnail"
                                fill
                                priority
                                quality={50}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
