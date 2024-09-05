import GradualSpacing from "@/components/ui/gradual-spacing";
import tShirt from "../../../public/assets/t-shirt.jpg";
import jacket from "../../../public/assets/jacket.webp";
import pant from "../../../public/assets/pant.png";
import shoe from "../../../public/assets/shoes.webp";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const MERCH = [
    {
        name: "T-Shirt",
        image: tShirt,
    },
    {
        name: "Jacket",
        image: jacket,
    },
    {
        name: "Pants",
        image: pant,
    },
    {
        name: "Shoes",
        image: shoe,
    },
] as const;

function Merchandise() {
    return notFound();
    return (
        <div className="py-8 px-4 md:py-24 space-y-6">
            <GradualSpacing
                text="Merchandise"
                className="text-center text-2xl md:text-5xl font-bold -tracking-widest font-moul"
            />
            <section className="max-w-3xl mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-14">
                    {MERCH.map((item, index) => (
                        <Link
                            href="#"
                            key={index}
                            className="hover:scale-110 transition-all ease-in-out duration-300"
                        >
                            <div className="aspect-square w-full relative rounded-lg">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className=" object-cover object-center rounded-lg"
                                />
                            </div>
                            <div className="p-2">
                                <div className="text-xl font-semibold">{item.name}</div>
                                <div className="text-sm text-gray-400">Price: $100</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Merchandise;
