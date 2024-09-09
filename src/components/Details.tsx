"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import instaLogo from "../../public/assets/instagram.png";
import WordRotate from "./ui/WordRotate";
import { LampContainer } from "./ui/lamp";

function Details() {
    return (
        <div className="md:pt-16 bg-[#020617]">
            <LampContainer className="!mb-0 !pb-0 hidden lg:flex">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-8 w-full px-4 md:mt-[88px] lg:px-40">
                    <motion.div
                        initial={{ opacity: 0.2, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0,
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                        className="bg-white/10 backdrop-blur-3xl flex flex-col gap-8 py-8 px-14 rounded-xl font-anybody"
                    >
                        <h1 className="font-bold text-xl">October 2024</h1>
                        <div className="flex items-center justify-around w-full gap-10 relative">
                            <div className="h-14 aspect-square select-none font-bold text-lg z-10 flex items-center justify-center rounded-md bg-[#ff4e78] transition-all ease-in-out duration-300 hover:scale-110 hover:animate-shake">
                                04
                            </div>
                            <div className="h-14 aspect-square font-bold text-lg z-10 flex items-center justify-center rounded-md bg-[#306ef9] transition-all ease-in-out duration-300 hover:scale-110 hover:animate-shakeleft select-none">
                                05
                            </div>
                            <div className="h-14 aspect-square font-bold text-lg flex z-10 items-center justify-center rounded-md bg-[#addb02] transition-all ease-in-out duration-300 hover:scale-110 hover:animate-shake select-none">
                                06
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="284"
                                height="32"
                                viewBox="0 0 284 32"
                                fill="none"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-4"
                            >
                                <path
                                    d="M1 21.359C27.6681 29.2015 92.7193 38.5005 139.579 12.9563C186.439 -12.5879 254.919 11.8359 283.301 27.2409"
                                    stroke="white"
                                    strokeWidth="2.84005"
                                    strokeDasharray="5.68 5.68"
                                />
                            </svg>
                        </div>
                        <div className="flex h-fit items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="23"
                                viewBox="0 0 22 23"
                                fill="none"
                            >
                                <path
                                    d="M10.7936 11.4073C11.28 11.4073 11.6966 11.234 12.0433 10.8873C12.3893 10.5413 12.5624 10.125 12.5624 9.6386C12.5624 9.15219 12.3893 8.73565 12.0433 8.38898C11.6966 8.04289 11.28 7.86985 10.7936 7.86985C10.3072 7.86985 9.89098 8.04289 9.54489 8.38898C9.19822 8.73565 9.02488 9.15219 9.02488 9.6386C9.02488 10.125 9.19822 10.5413 9.54489 10.8873C9.89098 11.234 10.3072 11.4073 10.7936 11.4073ZM10.7936 17.9075C12.5919 16.2567 13.9258 14.7568 14.7954 13.4078C15.6651 12.0594 16.0999 10.862 16.0999 9.81547C16.0999 8.20886 15.5875 6.8932 14.5628 5.86851C13.5387 4.8444 12.2823 4.33235 10.7936 4.33235C9.30493 4.33235 8.04823 4.8444 7.02354 5.86851C5.99943 6.8932 5.48738 8.20886 5.48738 9.81547C5.48738 10.862 5.9222 12.0594 6.79183 13.4078C7.66147 14.7568 8.9954 16.2567 10.7936 17.9075ZM10.7936 20.2511C8.42055 18.2318 6.64827 16.356 5.47677 14.6238C4.30467 12.8922 3.71863 11.2894 3.71863 9.81547C3.71863 7.60454 4.42996 5.84316 5.85262 4.53133C7.2747 3.21951 8.9217 2.5636 10.7936 2.5636C12.6656 2.5636 14.3126 3.21951 15.7346 4.53133C17.1573 5.84316 17.8686 7.60454 17.8686 9.81547C17.8686 11.2894 17.2829 12.8922 16.1114 14.6238C14.9393 16.356 13.1667 18.2318 10.7936 20.2511Z"
                                    fill="white"
                                />
                            </svg>
                            <p className="font-bold text-lg">MBU, Tirupati, INDIA</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0.2, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0,
                            duration: 0.6,
                            ease: "easeInOut",
                        }}
                        className="bg-white/10 backdrop-blur-3xl flex flex-col gap-8 p-16 rounded-xl"
                    >
                        <WordRotate
                            // words={["MOHANA MANTRA", "1st DAY", "2nd DAY", "3rd DAY"]}
                            words={["KALAKSHETRA", "PROSHOWS", "WORKSHOPS", "TECH", "SPOT EVENTS"]}
                            className="text-xl md:text-2xl font-bold text-center font-inter"
                        />
                        <div className="bg-[#ff4e78] rounded-xl font-anybody text-center w-3/4 mx-auto py-2 hover:scale-110 duration-200 select-none transition-transform ease-in-out">
                            EXPERIENCE NOW
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0.2, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="bg-white/10 backdrop-blur-3xl flex flex-col gap-8 py-8 px-14 rounded-xl font-anybody"
                    >
                        <Image src={instaLogo} height={40} width={40} alt="Instagram logo" />
                        <h1 className="font-semibold text-xl max-w-[250px] line-clamp-2">
                            Follow us on Instagram for further details
                        </h1>
                        <a
                            target="_blank"
                            href="https://instagram.com/mohana_mantra"
                            className="text-center text-yellow"
                        >
                            @mohana_mantra
                        </a>
                    </motion.div>
                </div>
            </LampContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:hidden place-content-center gap-8 w-full px-4 md:mt-40 lg:px-40 py-20">
                <motion.div
                    initial={{ opacity: 0.2, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0,
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                    className="bg-white/10 backdrop-blur-3xl flex flex-col gap-8 py-8 px-14 rounded-xl font-anybody"
                >
                    <h1 className="font-bold text-xl">October 2024</h1>
                    <div className="flex items-center justify-around w-full gap-10 relative">
                        <div className="h-14 aspect-square select-none font-bold text-lg z-10 flex items-center justify-center rounded-md bg-[#ff4e78] transition-all ease-in-out duration-300 hover:scale-110 hover:animate-shake">
                            04
                        </div>
                        <div className="h-14 aspect-square font-bold text-lg z-10 flex items-center justify-center rounded-md bg-[#306ef9] transition-all ease-in-out duration-300 hover:scale-110 hover:animate-shakeleft select-none">
                            05
                        </div>
                        <div className="h-14 aspect-square font-bold text-lg flex z-10 items-center justify-center rounded-md bg-[#addb02] transition-all ease-in-out duration-300 hover:scale-110 hover:animate-shake select-none">
                            06
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="284"
                            height="32"
                            viewBox="0 0 284 32"
                            fill="none"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-4"
                        >
                            <path
                                d="M1 21.359C27.6681 29.2015 92.7193 38.5005 139.579 12.9563C186.439 -12.5879 254.919 11.8359 283.301 27.2409"
                                stroke="white"
                                strokeWidth="2.84005"
                                strokeDasharray="5.68 5.68"
                            />
                        </svg>
                    </div>
                    <div className="flex h-fit items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="23"
                            viewBox="0 0 22 23"
                            fill="none"
                        >
                            <path
                                d="M10.7936 11.4073C11.28 11.4073 11.6966 11.234 12.0433 10.8873C12.3893 10.5413 12.5624 10.125 12.5624 9.6386C12.5624 9.15219 12.3893 8.73565 12.0433 8.38898C11.6966 8.04289 11.28 7.86985 10.7936 7.86985C10.3072 7.86985 9.89098 8.04289 9.54489 8.38898C9.19822 8.73565 9.02488 9.15219 9.02488 9.6386C9.02488 10.125 9.19822 10.5413 9.54489 10.8873C9.89098 11.234 10.3072 11.4073 10.7936 11.4073ZM10.7936 17.9075C12.5919 16.2567 13.9258 14.7568 14.7954 13.4078C15.6651 12.0594 16.0999 10.862 16.0999 9.81547C16.0999 8.20886 15.5875 6.8932 14.5628 5.86851C13.5387 4.8444 12.2823 4.33235 10.7936 4.33235C9.30493 4.33235 8.04823 4.8444 7.02354 5.86851C5.99943 6.8932 5.48738 8.20886 5.48738 9.81547C5.48738 10.862 5.9222 12.0594 6.79183 13.4078C7.66147 14.7568 8.9954 16.2567 10.7936 17.9075ZM10.7936 20.2511C8.42055 18.2318 6.64827 16.356 5.47677 14.6238C4.30467 12.8922 3.71863 11.2894 3.71863 9.81547C3.71863 7.60454 4.42996 5.84316 5.85262 4.53133C7.2747 3.21951 8.9217 2.5636 10.7936 2.5636C12.6656 2.5636 14.3126 3.21951 15.7346 4.53133C17.1573 5.84316 17.8686 7.60454 17.8686 9.81547C17.8686 11.2894 17.2829 12.8922 16.1114 14.6238C14.9393 16.356 13.1667 18.2318 10.7936 20.2511Z"
                                fill="white"
                            />
                        </svg>
                        <p className="font-bold text-lg">MBU,RANGAMPETA</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0.2, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0,
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                    className="bg-white/10 backdrop-blur-3xl flex flex-col gap-8 p-16 rounded-xl font-inter"
                >
                    <WordRotate
                        // words={["MOHANA MANTRA", "1st DAY", "2nd DAY", "3rd DAY"]}
                        words={["KALAKSHETRA", "PROSHOWS", "WORKSHOPS", "TECH", "SPOT EVENTS"]}
                        className="text-xl md:text-2xl font-bold text-center"
                    />
                    <button className="bg-[#ff4e78] rounded-xl w-3/4 mx-auto py-2 hover:scale-105 transition-all font-anybody ease-in-out">
                        EXPERIENCE NOW
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0.2, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="bg-white/10 backdrop-blur-3xl flex flex-col gap-8 py-8 px-14 rounded-xl font-anybody"
                >
                    <Image src={instaLogo} height={40} width={40} alt="Instagram logo" />
                    <h1 className="font-semibold text-xl max-w-[250px] line-clamp-2">
                        Follow us on Instagram for further details
                    </h1>
                    <a
                        target="_blank"
                        href="https://instagram.com/mohana_mantra"
                        className="text-center text-yellow"
                    >
                        @mohana_mantra
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default Details;
