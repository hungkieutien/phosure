import React from "react";
import "../styles/GalleryAreaStyles/_galleryarea.scss";
import Dish_1 from "../images/galleryarea/dish_1.png";
import Dish_2 from "../images/galleryarea/dish_2.png";
import Dish_3 from "../images/galleryarea/dish_3.png";
import Dish_4 from "../images/galleryarea/dish_4.png";

function GalleryArea() {

    return (
        <>
            <section className="gallery-area">
                <div className="container">
                    <div className="gallery-content">
                        <div className="single-gallery mt--400">
                            <figure>
                                <img src={Dish_1} alt="dish_1"/>
                            </figure>
                        </div>
                        <div className="single-gallery pl--2">
                            <figure>
                                <img src={Dish_2} alt="dish_2"/>
                            </figure>
                        </div>
                        <div className="single-gallery mt--200">
                            <figure>
                                <img src={Dish_3} alt="dish_3"/>
                            </figure>
                        </div>
                        <div className="single-gallery pl--2">
                            <figure>
                                <img src={Dish_4} alt="dish_4"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GalleryArea;