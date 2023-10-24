import React, {useState} from "react";
import "../styles/ReservationStyles/_reservation.scss"
import ReservationConfirmation from "./ReservationConfirmation";

export default function Reservation() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        guest_number: '',
        reservation_time: '',
        reservation_date: ''
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [isFormConfirmed, setIsFormConfirmed] = useState(false);

    const closeCartModalHandler = () => {
        setIsFormSubmitted(false);
    }

    const submitHandler = event => {
        event.preventDefault();

        if (formData.firstname && formData.lastname && formData.email && formData.phone &&
            formData.guest_number && formData.reservation_time &&
            formData.reservation_date) {
            setIsFormSubmitted(true);
        }
    }

    const confirmReservationHandler = () => {
        setIsFormConfirmed(true);
        closeCartModalHandler();
    }

    return (
        <>
            <section id="reservation" className="reservation">
                <div className="container">
                    <div className="reservation-content">
                        <form className="reservation-form" onSubmit={submitHandler}>
                            <div className="form-group">
                                <div className="input-wrapper">
                                    <label htmlFor="firstname">Firstname<b>*</b></label>
                                    <input className="form-control" type="text" id="firstname" name="firstname"
                                           placeholder="Firstname" onChange={(event) => {
                                        setFormData({...formData, firstname: event.target.value})
                                    }} required/>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="lastname">Lastname<b>*</b></label>
                                    <input className="form-control" type="text" id="lastname" name="lastname"
                                           placeholder="Lastname" onChange={(event) => {
                                        setFormData({...formData, lastname: event.target.value})
                                    }} required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-wrapper">
                                    <label htmlFor="email">E-Mail<b>*</b></label>
                                    <input className="form-control" type="email" id="email" name="email"
                                           placeholder="E-Mail" required
                                           onChange={(event) => {
                                               setFormData({...formData, email: event.target.value})
                                           }}/>
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor="phone">Phone<b>*</b></label>
                                    <input className="form-control" type="tel" id="phone" name="phone"
                                           placeholder="Phone"
                                           required onChange={(event) => {
                                        setFormData({...formData, phone: event.target.value})
                                    }}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-wrapper">
                                    <label htmlFor="guestnumber">Guestnumber<b>*</b></label>
                                    <input className="form-control" id="guestnumber" name="guestnumber"
                                           placeholder="Guest Number" type="number" min="1" max="5" step="1" required
                                           onChange={(event) => {
                                               setFormData({...formData, guest_number: event.target.value})
                                           }}>
                                    </input>
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor="reservationtime">Time<b>*</b></label>
                                    <input className="form-control" id="reservationtime" name="reservationtime"
                                           placeholder="Time" type="time" required
                                           onChange={(event) => {
                                               setFormData({...formData, reservation_time: event.target.value})
                                           }}>
                                    </input>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-wrapper-single">
                                    <label htmlFor="reservationdate">Date<b>*</b></label>
                                    <input className="form-control" type="date" id="reservationdate"
                                           name="reservationdate" placeholder="Date"
                                           required onChange={(event) => {
                                        setFormData({...formData, reservation_date: event.target.value})
                                    }}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-wrapper-single">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" name="message"
                                              placeholder="Post a message"/>
                                </div>
                            </div>

                            <div className="button-form">
                                <button type="submit">Send Request</button>
                            </div>


                            {isFormConfirmed &&
                                <div className="confirmation-text">
                                    <div className="thank-you-text">
                                        <h2>Thanks, {formData.firstname}.</h2>
                                        <p>We sent a confirmation E-Mail to {formData.email}.</p>
                                    </div>
                                </div>
                            }

                        </form>
                        <div className="reservation-text">
                            <h1>Book a table and get some delicious Pho</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                    </div>
                </div>
                {isFormSubmitted && <ReservationConfirmation onConfirmReservation={confirmReservationHandler}
                                                             onCloseModal={closeCartModalHandler}/>}
            </section>
        </>
    );
}
