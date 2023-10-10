import React from "react";
import Hero from "../component/Hero";
import FixedSideButton from "../component/FixedSideButton";
import MenuArea from "../component/MenuArea";
import GalleryArea from "../component/GalleryArea";

function Home() {
    return (
        <>
            <Hero/>
            <FixedSideButton/>
            <MenuArea/>
            <GalleryArea/>
        </>
    );
}

export default Home;