import React from "react";
import Hero from "../component/Hero";
import FixedSideButton from "../component/FixedSideButton";
import MenuArea from "../component/MenuArea";

function Home() {
    return (
        <>
            <Hero/>
            <FixedSideButton/>
            <MenuArea/>
        </>
    );
}

export default Home;