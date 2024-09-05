"use client";
import { InfiniteMovingCards } from "./ui/moving-cards";
import Television from "../../public/assets/gallery.png";
import pic1 from "../../public/assets/gallery/IMG20230817155441.jpg";
import pic2 from "../../public/assets/gallery/pic1.jpg";
import pic3 from "../../public/assets/gallery/pic2.jpg";
import pic4 from "../../public/assets/gallery/pic3.jpg";
import pic5 from "../../public/assets/gallery/DSC06900.jpg";
import pic6 from "../../public/assets/gallery/C0128T01.jpg";
import pic7 from "../../public/assets/gallery/GETH7234.jpg";
import pic8 from "../../public/assets/gallery/C0039T01.jpg";
import pic9 from "../../public/assets/gallery/Clip0029T01.jpg";
import pic10 from "../../public/assets/gallery/GETH7229.jpg";
import pic11 from "../../public/assets/gallery/GETH1049.jpg";
import pic12 from "../../public/assets/gallery/C0128T01.jpg";
import pic13 from "../../public/assets/gallery/Clip0035T01.jpg";
import pic14 from "../../public/assets/gallery/GETH7222.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

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
                        <Image src={Television} fill alt="TV" />
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
                <h1 className="text-4xl md:text-6xl font-bold font-anybody text-center text-[#306ef9]">
                    GALLERY
                </h1>
            </div>
            <InfiniteMovingCards
                pauseOnHover={false}
                direction="left"
                items={[
                    { image: pic1.src as string },
                    { image: pic2.src as string },
                    { image: pic3.src as string },
                    { image: pic4.src as string },
                    { image: pic5.src as string },
                    { image: pic6.src as string },
                    { image: pic7.src as string },
                ]}
            />
            <InfiniteMovingCards
                direction="right"
                pauseOnHover={false}
                items={[
                    { image: pic11.src as string },
                    { image: pic12.src as string },
                    { image: pic8.src as string },
                    { image: pic9.src as string },
                    { image: pic10.src as string },
                    { image: pic13.src as string },
                    { image: pic14.src as string },
                ]}
            />
        </section>
    );
}

export default Gallery;
