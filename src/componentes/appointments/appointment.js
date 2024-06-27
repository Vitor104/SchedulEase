import React, {useState} from "react";
import styles from './appointment.module.css'

function Appointment (props) {

    const [divsAptm, setDivsAptm] = useState([]);

    const submitAptm = () => {
         let newAptm = [props.option]

         setDivsAptm(n => [...n, newAptm]);
    }
   
    

    return (
        <main>
            <div className={styles.container}>
                <h2>Add Appointments</h2>
                <form className={styles.formContainer}>
                    <label id='Title'>Name: </label>
                    <input className={styles.formChild} onChange={props.handleTitleChange} id="title" type="text" required placeholder="Title"></input>

                    <label id="description">Description: </label>
                    <textarea id="description" onChange={props.handleDescriptionChange}></textarea>

                    <label id='contact'>Contact: </label>
                    <select value={props.option} className={styles.formStyle} name="contact" id="contact">

                        {props.option}

                    </select>
                   

                    <label id='date'>Date: </label>
                    <input className={styles.formChild} onChange={props.handleDateChange} id="date" required placeholder="Date" type="date"></input>

                    <label id='time'>Time: </label>
                    <input className={styles.formChild} id="time" onChange={props.handleTimeChange} required placeholder="Time" type="time"></input>

                </form>
                <button type="submit" onClick={submitAptm} className={styles.button}>Save</button>
            </div>

            <section>
                <h2>Appointment list</h2>

                <ul>
                   {divsAptm.filter((element, i) => i === i)};
                </ul>

                <div>
                    
                </div>
            </section>
        </main>
    )
}

export default Appointment;

/* {divsAptm.filter((e, index) => 
                    <li className={styles.newLi} key={index}>
                        {e}<br></br>
                    </li>)}*/