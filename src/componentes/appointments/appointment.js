import React, {useState} from "react";
import styles from './appointment.module.css'

function Appointment (props) {

  const {setDescription, setTime, setDate} = props;
   
    

    return (
        <main>
            <div className={styles.container}>
                <h2>Add Appointments</h2>
                <form className={styles.formContainer}>
                    <label id='Title'>Name: </label>
                    <input className={styles.formChild} id="title" type="text" required placeholder="Title"></input>

                    <label id="description">Description: </label>
                    <textarea id="description" onChange={(e) => setDescription (e.target.value)}></textarea>

                    <label id='contact'>Contact: </label>
                    <select className={styles.formStyle} name="contact" id="contact">

                        {props.option}

                    </select>
                   

                    <label id='date'>Date: </label>
                    <input className={styles.formChild} onChange={(e) => setDate (e.target.value)} id="date" required placeholder="Date" type="date"></input>

                    <label id='time'>Time: </label>
                    <input className={styles.formChild} id="time" onChange={(e) => setTime (e.target.value)} required placeholder="Time" type="time"></input>

                </form>
                <button type="submit" onClick={props.submit} className={styles.button}>Save</button>
            </div>

            <section>
                <h2>Appointment list</h2>
                <div>
                    {props.divsAptm}
                </div>
            </section>
        </main>
    )
}

export default Appointment;