import React, {useState} from "react";
import Logo from "../images/logo/logo.png";
import "../styles/NavbarStyles/_navbar.scss";
import {IconMenu2} from "@tabler/icons-react";

const NavBar = () => {

    const [burgerMenu, setBurgerMenu] = useState(false);

    const handleBurgerMenu = () => {

        if (!burgerMenu) {
            setBurgerMenu(true);
        } else {
            setBurgerMenu(false);
        }
    }

    const links_left = [
        {
            name: 'Home', anchor: '#home'
        },
        {
            name: 'Menu', anchor: '#menu'
        },
        {
            name: 'About', anchor: '#about'
        }
    ]

    const links_right = [
        {
            name: 'Pages', anchor: '#pages'
        },
        {
            name: 'Blog', anchor: '#blog'
        },
        {
            name: 'Gallery', anchor: '#gallery'
        },
    ]

    return (
        <>
            <nav>
                <div className="container">
                    <div className="navbar">
                        <ul className="navbar__links">
                            {links_left.map(link => (<li><a href={link.anchor}>{link.name}</a></li>))}
                        </ul>
                        <div className="navbar__img">
                            <a href="/">
                                <img src={Logo} alt="restaurant-img"/>
                            </a>
                        </div>
                        <ul className="navbar__links">
                            {links_right.map(link => (<li><a href={link.anchor}>{link.name}</a></li>))}
                        </ul>
                    </div>
                    <div className="burger-menu">
                        <span onClick={(handleBurgerMenu)}><IconMenu2 width={30} height={30}
                                                                      className="burger-icon"></IconMenu2></span>
                    </div>
                </div>
                <div className={`mobile-menu ${burgerMenu ? "open-menu" : "close-menu"}`}>
                    <ul>
                        {links_left.concat(links_right).map(link =>
                            (<li><a href={link.anchor}>{link.name}</a></li>))
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;