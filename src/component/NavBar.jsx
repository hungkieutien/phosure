import React from "react";
import Logo from "../images/logo/logo.png"
import "../styles/NavbarStyles/_navbar.scss"

const NavBar = () => {

    return (
        <>

            <nav>
                <div className="container">
                    <div className="mobile-navbar"></div>
                    <div className="navbar">
                        <ul className="navbar__links">
                            <a id="home" href="#home">
                                <li>Home</li>
                            </a>
                            <a id="menu" href="#menu">
                                <li>Menu</li>
                            </a>
                            <a id="about" href="#about">
                                <li>About</li>
                            </a>
                        </ul>
                        <div className="navbar__img">
                            <a href="/">
                                <img src={Logo} alt="restaurant-img"/>
                            </a>
                        </div>
                        <ul className="navbar__links">
                            <a id="pages" href="#pages">
                                <li>Pages</li>
                            </a>
                            <a id="blog" href="#blog">
                                <li>Blog</li>
                            </a>
                            <a id="gallery" href="#gallery">
                                <li>Gallery</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default NavBar;