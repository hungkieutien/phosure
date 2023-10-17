import React from "react";
import "../styles/FixedSideButtonStyles/_fixedsidebutton.scss"

function FixedSideButton() {

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

export default FixedSideButton;