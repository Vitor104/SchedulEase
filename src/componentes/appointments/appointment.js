import React from "react";
import styles from './appointment.module.css'

function Appointment (props) {
    return (
        <main>
            <div className={styles.container}>
                <h2>Add Appointments</h2>
                <form className={styles.formContainer}>
                    <label id='Title'>Name: </label>
                    <input className={styles.formChild} id="title" type="text" required placeholder="Title"></input>

                    <label id='contact'>Contact: </label>
                    <select name="contact" id="contact">
                        <option value={props.teste}>No contact select</option>
                    </select>
                   

                    <label id='date'>Date: </label>
                    <input className={styles.formChild} id="date" required placeholder="Date" type="date"></input>

                    <label id='time'>Time: </label>
                    <input className={styles.formChild} id="time" required placeholder="Time" type="time"></input>

                </form>
                <button type="submit" onClick={props.submitForm} className={styles.button}>Save</button>
            </div>
        </main>
    )
}

export default Appointment;