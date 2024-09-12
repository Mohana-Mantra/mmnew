"use client";
import { cn } from "@/lib/utils";
import { Monoton } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { InfiniteMovingCards } from "./ui/moving-cards";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

function Gallery() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <section className="w-full mt-[48px]">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 mb-10">
                <div>
                    {/* cd */}
                    <div
                        onClick={openModal}
                        className="relative aspect-[100/69] w-80 cursor-pointer"
                    >
                        <Image
                            src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133751/vhii4zd2lnl4sgchpjn1.png"
                            fill
                            alt="TV"
                        />
                    </div>

                    {isOpen && (
                        <div
                            onClick={closeModal}
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
                        >
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full p-4"
                            >
                                <span
                                    onClick={closeModal}
                                    className="absolute z-10 -top-2 right-[2px] text-gray-950 hover:text-black text-3xl cursor-pointer"
                                >
                                    &times;
                                </span>
                                <div className="relative pb-[56.25%] h-0 overflow-hidden w-full">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/6cVU9EKoMgs?si=OXi14yS10iNF5NVA"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* dc */}
                </div>
                <h1
                    className={cn(
                        "text-4xl md:text-6xl font-bold text-yellow text-center",
                        monoton.className
                    )}
                >
                    GALLERY
                </h1>
            </div>
            <InfiniteMovingCards
                pauseOnHover={false}
                direction="left"
                items={[
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133599/gallery/gtydpnsmmnknfwmhtssj.jpg",
                    },
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133544/gallery/yllhbmnebolei4nqodus.jpg",
                    },
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133490/gallery/v2dnjee5sgzde4ngijac.jpg",
                    },
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133458/gallery/phamhmic5t6sadmibo6s.jpg",
                    },
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/gallery/j7wt8aepekjn3minfbp4.jpg",
                    },
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133429/gallery/rpxh7tsud776nrhu7v9b.jpg",
                    },
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133429/gallery/bjqh6dmc0tivhvtlpjm2.jpg",
                    },
                ]}
            />
            <InfiniteMovingCards
                direction="right"
                pauseOnHover={false}
                items={[
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133554/gallery/b6pqulukwtcmyxo27e98.jpg",
                    },
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133538/gallery/qri4reqqmbnl5mlsbugr.jpg",
                    },
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133469/gallery/xcskkieldro4hco7chis.jpg",
                    },
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/gallery/nbp1xwdbx0nch0ubmvbz.jpg",
                    },
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133429/gallery/uexunumgxvxu2avcnyre.jpg",
                    },
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/gallery/ceolt5xfvjiygoiktduv.jpg",
                    },
                    {
                        image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133429/gallery/zjm24mgrf8xzao46ojof.jpg",
                    },
                ]}
            />
        </section>
    );
}

export default Gallery;
