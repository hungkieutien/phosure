import React from "react";
import "../styles/_menu.scss"
import Section from "./Section";

export default function Menu() {

    const meals = [
        {
            id: "m1",
            categorie: "Appetizer",
            dish: "Summer Rolls",
            description: "this is a vibe",
            price: "5,00 EUR",
        },
        {
            id: "m2",
            categorie: "main courses",
            dish: "Pho",
            description: "this is probably the best dish ever",
            price: "15,00 EUR"
        },
        {
            id: "m3",
            categorie: "Drinks & juices",
            dish: "Coffee with egg",
            description: "this sounds crazy, but nice one",
            price: "3,00 EUR"
        },
    ];

    return (
        <>
            <Section id="menu" className="menu-area" mode="menu">
                <div className="menu-text">
                    <h1>I mean what the pho?</h1>
                    <p>Pho is like a flavor explosion in your mouth! The noodles dance, the meat cracks jokes,
                        and the broth? It's the star of the soup show! Enjoy your meal and lots of laughter!</p>
                    <a href="/">See Full Menu</a>
                </div>
                <div className="menu-list">
                    <div className="single-menu">
                        {meals.map(meal => {
                                return (
                                    <div key={meal.id}>
                                        <h3>{meal.categorie}</h3>
                                        <ul>
                                            <li>
                                                <p className="menu-item">{meal.dish} - <span>{meal.price}</span></p>
                                                <p>{meal.description}</p>
                                            </li>
                                            <li>
                                                <p className="menu-item">{meal.dish} - <span>{meal.price}</span></p>
                                                <p>{meal.description}</p>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </Section>
        </>
    );
}
