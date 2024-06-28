import React, {useState} from "react";
import styles from './appointment.module.css'

function Appointment (props) {

    const [divsAptm, setDivsAptm] = useState([]);
    const [teste, setTeste] = useState([]);

    const submitAptm = (e) => {
        e.preventDefault();
         let newAptm = {teste: teste}

         setDivsAptm(n => [...n, newAptm]);       
         
         
    }

    const handleOptionChange = (event) => {

        setTeste(event.target.value);

       //let newTest = event.target.value;

       // setDivsAptm(n => [...n, newTest]);

       
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
                    <select className={styles.formStyle} name="contact" id="contact" onChange={handleOptionChange}>


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

                
                {divsAptm.map((element, index) => 
                    <div className={styles.newLi} key={index}>
                    {element.name}  <br></br>
                    {element.email} <br></br>
                    {element.contato}
                    </div>)}
                

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

                    /*
                    {divsAptm.map((element, index) => 
                    <li className={styles.newLi} key={index}>
                    {element.name}  <br></br>
                    {element.email} <br></br>
                    {element.contato}
                    {console.log(element.name)}
                    </li>)}
                    
                    */ 