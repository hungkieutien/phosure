import React from "react";
import ReactDOM from "react-dom";
import "../styles/_modal.scss"

const Backdrop = () => {
    return <div className="backdrop"></div>
}

const ModalOverlay = (props) => {
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {

    // Portal nutzen, um sicherzustellen, dass Code nur an einer bestimmmten Stelle ist.
    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
}

export default Modal;