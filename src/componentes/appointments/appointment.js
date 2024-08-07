import React, {useState} from "react";
import styles from './appointment.module.css';
import {v4 as uuidv4} from 'uuid';

function Appointment (props) {

  //  const [divsAptm, setDivsAptm] = useState([]);
  //  const [teste, setTeste] = useState([]);
    
/*
    const submitAptm = (e) => {
        e.preventDefault();
        
       //  let newAptm = {name: teste};

         setDivsAptm(n => [...n, teste]);       
         
         
    }

    const handleOptionChange = (event) => {

       setTeste(event.target.value);
        

     
       
   }
    
   */
    

    return (
        <main>
            <div className={styles.container}>
                <h2>Add Appointments</h2>
                <form className={styles.formContainer}>
                    <label id='Title'>Name: </label>
                    <input className={styles.formChild} onChange={props.handleTitleChange} id="title" type="text" required placeholder="Title"></input>

                    <label id="description">Description: </label>
                    <textarea className={styles.formChild} id="description" onChange={props.handleDescriptionChange}></textarea>

                    <label id='contact'>Contact: </label>
                    <select className={styles.formStyle} name="contact" id="contact">


                        {props.option}
                        

                    </select>
                   

                    <label id='date'>Date: </label>
                    <input className={styles.formChild} onChange={props.handleDateChange} id="date" required placeholder="Date" type="date"></input>

                    <label id='time'>Time: </label>
                    <input className={styles.formChild} id="time" onChange={props.handleTimeChange} required placeholder="Time" type="time"></input>

                    
                </form>
                
                <button type="submit" onClick={props.submitAptm} className={styles.button}>Save</button>
            </div>

            <section className={styles.sectionDivs}>
                <h2>Appointment list</h2>

                <div className={styles.newAptmContainer}>
                
                </div>

                {props.divsAptm}
           
                
                
            </section>
        </main>
    )
}

export default Appointment;

/*
 {divsAptm.map((e) => {
                    return (
                        <div className={styles.newAptm} key={uuidv4()}>
                            {props.titleAptm} <br></br>
                            {props.description} <br></br>
                            {e}<br></br>
                            {props.date} <br></br>
                            {props.time}

                        </div>
                    )
                })}

*/