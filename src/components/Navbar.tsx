"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
    const path = usePathname();
    const [isHamburgerOpen, setHamburgerOpen] = useState(false);

    return (
        <>
            {/* Desktop Navbar */}
            <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block w-auto max-w-[80%] px-6 py-4 rounded-[45px] font-sulpher font-bold text-[18px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[4px] border border-[rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-500 ease-in-out hover:bg-[rgba(255,255,255,0.2)] hover:backdrop-blur-[6px] hover:shadow-2xl">
                <nav className="w-full h-full flex items-center justify-evenly">
                    <div className="h-full flex items-center justify-center gap-8">
                        <Link href="/" className={`${path === "/" && "text-[#feca00]"}`}>
                            Home
                        </Link>
                        <Link
                            href="/events"
                            className={`${path.includes("/events") && "text-[#feca00]"}`}
                        >
                            Events
                        </Link>
                        <Link
                            href="/gallery"
                            className={`${path.includes("/gallery") && "text-[#feca00]"}`}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/contact"
                            className={`${path.includes("/contact") && "text-[#feca00]"}`}
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="flex items-center h-full gap-8">
                        <Link
                            href="https://mmregistration.vercel.app/"
                            className={`bg-secondary text-black px-4 py-2 border-[2px] border-secondary ${
                                path === "/login" && "text-[#feca00]"
                            } transition-all duration-300 ease-in-out hover:bg-black hover:text-white`}
                        >
                            Buy Your Pass
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Mobile Hamburger Menu */}
            <div
                onClick={() => setHamburgerOpen((prev) => !prev)}
                className={cn(
                    "m-4 p-3 bg-[rgba(255,255,255,0.1)] backdrop-blur-[4px] border border-[rgba(255,255,255,0.18)] rounded-md w-10 aspect-square fixed z-[110] cursor-pointer top-0 left-0 md:hidden flex flex-col justify-between items-start transition-all ease-in-out duration-150",
                    {
                        "items-center justify-center": isHamburgerOpen,
                    }
                )}
            >
                <span
                    className={cn(
                        "w-full h-[0.120rem] bg-white rounded-md transition-all ease-in-out duration-500",
                        {
                            "transform rotate-[135deg] w-6 absolute": isHamburgerOpen,
                        }
                    )}
                />
                <span
                    className={cn("w-2/3 h-0.5 bg-white rounded-md transition-all ease-in-out", {
                        "opacity-0": isHamburgerOpen,
                    })}
                />
                <span
                    className={cn(
                        "w-full h-[0.120rem] bg-white rounded-md transition-all ease-in-out duration-500",
                        {
                            "transform -rotate-[135deg] w-6 absolute": isHamburgerOpen,
                        }
                    )}
                />
            </div>

            {/* Mobile Menu */}
            <section
                className={cn(
                    "fixed z-[100] pl-6 pb-8 pr-10 bg-[rgba(255,255,255,0.1)] backdrop-blur-[4px] opacity-0 rounded-[45px] pt-20 border border-[rgba(255,255,255,0.18)] flex flex-col gap-6 -translate-x-[101%] transition-all ease-in-out duration-700",
                    {
                        "m-2 translate-x-0 opacity-100": isHamburgerOpen,
                    }
                )}
            >
                <Link
                    href="/"
                    className={`${path === "/" && "text-[#feca00]"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Home
                </Link>
                <Link
                    href="/events"
                    className={`${path.includes("/events") && "text-yellow-400"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Events
                </Link>
                <Link
                    href="/gallery"
                    className={`${path.includes("/gallary") && "text-yellow-400"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Gallery
                </Link>
                <Link
                    href="/contact"
                    className={`${path.includes("/contact") && "text-yellow-400"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Contact
                </Link>
                <Link
                    href="/register"
                    className={`${path.includes("/register") && "text-yellow-400"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Register
                </Link>
                <Link
                    href="/login"
                    className={`${path.includes("/login") && "text-yellow-400"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Login
                </Link>
            </section>
        </>
    );
}

export default Navbar;
