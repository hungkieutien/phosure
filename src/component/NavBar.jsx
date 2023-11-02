import React, {useState} from "react";
import Logo from "../images/logo/logo.png";
import "../styles/_navbar.scss";
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
            id: "l1",
            name: 'Home',
            anchor: '#home'
        },
        {
            id: "l2",
            name: 'Menu',
            anchor: '#menu'
        },
        {
            id: "l3",
            name: 'Gallery',
            anchor: '#gallery'
        }
    ]

    const links_right = [
        {
            id: "l4",
            name: 'Reservation',
            anchor: '#reservation'
        },
        {
            id: "l5",
            name: 'Chef',
            anchor: '#chefsquotes'
        },
        {
            id: "l6",
            name: 'Blog',
            anchor: '#blog'
        },
    ]

    return (
        <>
            <nav>
                <div className="container">
                    <div className="navbar">
                        <ul className="navbar__links">
                            {links_left.map(link => (<li key={link.id}><a href={link.anchor}>{link.name}</a></li>))}
                        </ul>
                        <div className="navbar__img">
                            <a href="/">
                                <img src={Logo} alt="restaurant-img"/>
                            </a>
                        </div>
                        <ul className="navbar__links">
                            {links_right.map(link => (<li key={link.id}><a href={link.anchor}>{link.name}</a></li>))}
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
                            (<li key={link.id}><a onClick={handleBurgerMenu} href={link.anchor}>{link.name}</a></li>))
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;