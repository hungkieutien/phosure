import React from "react";
import "../styles/_hero.scss"
import Section from "./Section";

export default function Hero() {

    return (
        <>
            <Section id="home" className="hero-section" mode="hero">
                <h1>Phosure</h1>
                <hr></hr>
                <p>A Fine Pho House</p>
            </Section>
        </>
    );
}
