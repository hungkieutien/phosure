import React from "react";
import Modal from "../ui/Modal";
import "../styles/ReservationStyles/_reservationconfirmation.scss"

export default function ReservationConfirmation(props) {

    return (
        <Modal>
            <div className="confirmation-content">
                <p className="headline">Important notice</p>
                <p className="text"> Dear guests, from Monday to Saturday the tables are available for 2 hours. If you
                    need more time,
                    please
                    call us in advance to discuss this with us personally. You will find further information on our
                    homepage.
                </p>
                <div className="confirmation-buttons">
                    <button className="confirm-btn" onClick={props.onConfirmReservation}>Confirm reservation</button>
                    <button className="back-btn" onClick={props.onCloseModal}>Back to the reservation overview
                    </button>
                </div>
            </div>
        </Modal>
    );
}
