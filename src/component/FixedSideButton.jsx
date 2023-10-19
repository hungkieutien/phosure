import React from "react";
import "../styles/_fixedsidebutton.scss"

export default function FixedSideButton() {

    return (
        <>
            <div className="fixed-view-menu-left">
                <p>
                    <a href="#menu">view menu</a>
                </p>
            </div>
            <div className="fixed-book-table-right">
                <p className="rotate-text-book-table">
                    <a href="#reservation">book table</a>
                </p>
            </div>
        </>
    );

}
