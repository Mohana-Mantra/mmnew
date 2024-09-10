import Details from "@/components/Details";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ProShows from "@/components/ProShow";
import Sponsers from "@/components/Sponsers";

import "./style.css";

export default function Home() {
    return (
        <>
            <Hero />
            <Details />
            <ProShows />
            <Gallery />
            <Sponsers />
            {/* <CountDown /> */}
        </>
    );
}
