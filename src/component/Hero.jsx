import React from "react";
import "../styles/HeroStyles/_hero.scss"

function Hero() {

    return (
        <>
            <section id="home" className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1>Phosure</h1>
                        <hr></hr>
                        <p>A Fine Pho House</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;