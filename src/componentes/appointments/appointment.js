import React, {useState} from "react";
import styles from './appointment.module.css'

function Appointment (props) {

   // let example = {
  //      name: props.name,
 //       email: props.email,
 //     contato: props.contato
  //  }

  

  // const [select, setSelect] = useState([{
  //      name: name,
  //      email: email,
  //      contato: contato,
  //      id: 1
 //   }
//])
   //console.log(select);

   
    

    return (
        <main>
            <div className={styles.container}>
                <h2>Add Appointments</h2>
                <form className={styles.formContainer}>
                    <label id='Title'>Name: </label>
                    <input className={styles.formChild} id="title" type="text" required placeholder="Title"></input>

                    <label id='contact'>Contact: </label>
                    <select className={styles.formStyle} name="contact" id="contact">

                        {props.option ? props.option : 'No contact'}

                    </select>
                   

                    <label id='date'>Date: </label>
                    <input className={styles.formChild} id="date" required placeholder="Date" type="date"></input>

                    <label id='time'>Time: </label>
                    <input className={styles.formChild} id="time" required placeholder="Time" type="time"></input>

                </form>
                <button type="submit" onClick={props.submitForm} className={styles.button}>Save</button>
            </div>

            <section>
                <h2>Appointment list</h2>
                <div>
                    {props.divs}
                </div>
            </section>
        </main>
    )
}

export default Appointment;