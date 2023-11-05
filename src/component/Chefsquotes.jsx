import React from "react";
import Chef_img from "../images/chefsquotes/chefsquotes.png";
import "../styles/_chefsquotes.scss"
import Section from "./Section";

export default function Chefsquotes() {

    return (
        <>
            <Section id="chefsquotes" className="chefsquotes" mode="chefsquotes">
                <div className="chef-text">
                    <h1>
                        Chef's<br></br>Quotes
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>
                <div className="chef-img">
                    <div className="mt--120">
                        <figure>
                            <img src={Chef_img} alt="dish_1"/>
                        </figure>
                    </div>
                </div>
            </Section>
        </>
    );

}
