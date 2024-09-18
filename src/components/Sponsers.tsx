import { Monoton } from "next/font/google";
import Image from "next/image";
import { InfiniteMovingSponsers } from "./ui/moving-cards";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

function Sponsers() {
    return (
        <>
            <div className="bg-slate-900 py-20 mt-20 w-full space-y-10 md:space-y-16">
                <h1
                    className={`text-center text-2xl md:text-[2.8rem] text-yellow ${monoton.className}`}
                >
                    sponsors
                </h1>
                { <div className="flex flex-wrap h-fit items-center overflow-hidden w-full px-6 justify-center gap-8">
                    <div className="relative h-40 rounded-lg aspect-[1080/544]">
                        <Image
                            src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133435/sponsers/new/pjpawnhw6hb4ttjswi5x.jpg"
                            fill
                            className="object-cover rounded-lg"
                            alt="sponsers"
                        />
                    </div>
                    <div className="mx-4 relative h-40 rounded-lg aspect-[964/344]">
                        <Image
                            src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/sponsers/new/mzmr8epxsnrtr9mtaxv1.jpg"
                            fill
                            className="object-cover rounded-lg"
                            alt="sponsers"
                        />
                    </div>
                    <div className="relative h-40 rounded-lg aspect-[919/856]">
                        <Image
                            src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726136977/WhatsApp_Image_2024-09-12_at_15.46.16_3b55eefa_rr6a3s.jpg"
                            fill
                            className="object-cover rounded-lg"
                            alt="sponsers"
                        />
                    </div>
                    <div className="relative h-40 rounded-lg aspect-[540/330]">
                        <Image
                            src="https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/sponsers/new/xlv1wa4ilusygwc5fgwa.jpg"
                            fill
                            className="object-cover rounded-lg"
                            alt="sponsers"
                        />
                    </div>
                    <div className="relative h-40 rounded-lg aspect-[800/800]">
                        <Image
                            src="https://res.cloudinary.com/dbjy9s3cz/image/upload/c_crop,w_800,h_800,ar_1:1/v1726230224/14bbdafd-9023-41cb-9e54-ab26cbaf8ef8.png"
                            fill
                            className="object-cover rounded-lg"
                            alt="sponsers"
                        />
                    </div>
                </div> }
                <InfiniteMovingSponsers
                    direction="left"
                    pauseOnHover={false}
                    speed="slow"
                    items={[
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133435/sponsers/new/pjpawnhw6hb4ttjswi5x.jpg",
                            height: 300,
                            width: 595,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/c_crop,w_800,h_800,ar_1:1/v1726230224/14bbdafd-9023-41cb-9e54-ab26cbaf8ef8.png",
                            height: 300,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/sponsers/new/mzmr8epxsnrtr9mtaxv1.jpg",
                            height: 300,
                            width: 840,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726136977/WhatsApp_Image_2024-09-12_at_15.46.16_3b55eefa_rr6a3s.jpg",
                            height: 300,
                            width: 801,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/sponsers/new/xlv1wa4ilusygwc5fgwa.jpg",
                            height: 300,
                            width: 490,
                        },
                    ]}
                />
            </div>
            <div className="bg-slate-900 py-20 space-y-10 md:space-y-16">
                <h1
                    className={`text-center text-2xl md:text-[2.8rem] text-yellow ${monoton.className}`}
                >
                    our past sponsors
                </h1>
                <InfiniteMovingSponsers
                    direction="left"
                    pauseOnHover={false}
                    speed="slow"
                    items={[
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133434/sponsers/ftz8npac6rvtnnk4njn1.png",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133432/sponsers/fbmxx6gj6h5gzureb0gs.png",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133434/sponsers/y3emwyi3svo2c6hywpie.png",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/sponsers/fhhbvbfprm47dxjelwed.png",
                            height: 200,
                            width: 300,
                        },
                        {
                            image: "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133438/sponsers/vgwhp8urvhl3zdvlw5pl.png",
                            height: 200,
                            width: 300,
                        },
                    ]}
                />
            </div>
        </>
    );
}

export default Sponsers;
