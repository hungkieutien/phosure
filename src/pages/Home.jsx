import React from "react";
import Hero from "../component/Hero";
import FixedSideButton from "../component/FixedSideButton";
import Menu from "../component/Menu";
import Gallery from "../component/Gallery";
import Reservation from "../component/Reservation";

function Home() {
    return (
        <>
            <Hero/>
            <FixedSideButton/>
            <Menu/>
            <Gallery/>
            <Reservation/>
        </>
    );
}

export default Home;