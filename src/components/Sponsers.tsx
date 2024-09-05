import cityCable from "../../public/assets/sponsers/city-cable.png";
import hetro from "../../public/assets/sponsers/hetro.png";
import makeMyTrip from "../../public/assets/sponsers/make-my-trip.png";
import prakashArts from "../../public/assets/sponsers/prakash-arts.png";
import redFM from "../../public/assets/sponsers/redfm.png";
import { InfiniteMovingSponsers } from "./ui/moving-cards";
import { Monoton } from "next/font/google";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

function Sponsers() {
    return (
        <div className="bg-slate-900 py-20 mt-20 space-y-10 md:space-y-16">
            <h1
                className={`text-center text-4xl md:text-[3.538rem] text-yellow ${monoton.className}`}
            >
                sponsors
            </h1>
            <InfiniteMovingSponsers
                direction="left"
                pauseOnHover={false}
                speed="slow"
                items={[
                    {
                        image: hetro.src as string,
                        height: hetro.height,
                        width: hetro.width,
                    },
                    {
                        image: cityCable.src as string,
                        height: cityCable.height,
                        width: cityCable.width,
                    },
                    {
                        image: makeMyTrip.src as string,
                        height: makeMyTrip.height,
                        width: makeMyTrip.width,
                    },
                    {
                        image: prakashArts.src as string,
                        height: prakashArts.height,
                        width: prakashArts.width,
                    },
                    { image: redFM.src as string, height: redFM.height, width: redFM.width },
                ]}
            />
        </div>
    );
}

export default Sponsers;
