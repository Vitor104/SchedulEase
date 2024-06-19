import React from "react";
import styles from './appointment.module.css'

function Appointment () {
    return (
        <main>
            <div className={styles.container}>
                <h2>Add Appointments</h2>
                <form className={styles.formContainer}>
                    <label id='name'>Name: </label>
                    <input className={styles.formChild} id="name" type="text" required placeholder="Name"></input>

                    <label id='contact'>Contact: </label>
                    <input className={styles.formChild} id="contact" type="number" required placeholder="Contact"></input>

                    <label id='date'>Date: </label>
                    <input className={styles.formChild} id="date" required placeholder="Date" type="date"></input>

                    <label id='time'>Time: </label>
                    <input className={styles.formChild} id="time" required placeholder="Time" type="time"></input>
                </form>
            </div>
        </main>
    )
}

export default Appointment;