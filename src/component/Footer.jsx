import React from "react";
import "../styles/_footer.scss";
import {IconArrowNarrowRight} from '@tabler/icons-react';

export default function Footer() {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-columns">
                            <div className="footer-column">
                                <h4>Phosure</h4>
                                <ul>
                                    <li>
                                        <p>A Pho a day keeps the doctor away.</p>
                                    </li>
                                    <li>
                                        Phone: 0981 91828394
                                    </li>
                                    <li>
                                        E-Mail: phosure@gmail.com
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h4>Quick Links</h4>
                                <ul className="quicklinks">
                                    <li>
                                        <a href="#menu">Menu</a>
                                    </li>
                                    <li>
                                        <a href="#reservation">Reservation</a>
                                    </li>
                                    <li>
                                        <a href="/">Imprint</a>
                                    </li>
                                    <li>
                                        <a href="/">Privacy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h4>Working Hours</h4>
                                <ul>
                                    <li>
                                        Mon - Fri: 9:00am - 9:00pm
                                    </li>
                                    <li>
                                        Sat: 9:00am - 11:00pm
                                    </li>
                                    <li>
                                        Sun: Closed
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h4>Newsletter</h4>
                                <ul>
                                    <li>
                                        <p>Stay updated with our latest News</p>
                                    </li>
                                    <div className="input-group">
                                        <input type="email" placeholder="Enter Email Address"></input>
                                        <button className="submit-email">
                                            <span>
                                                <IconArrowNarrowRight height={15} width={15}></IconArrowNarrowRight>
                                            </span>
                                        </button>
                                    </div>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="footer-bottom">
                        <p>Copyright © Phosure</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
