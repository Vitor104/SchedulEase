import React, {useState} from "react";
import styles from './contact.module.css';

function Contact (props) {

   
    
    return (
        <div className={styles.container}>
            <h2>Add Contacts</h2>

            <section>
                <form className={styles.formulario}>
                    <label for='nome' className={styles.label}>Nome: </label>
                    <input required  placeholder="Name" onChange={props.handleNameChange} className={styles.formChild} id="nome" type="text"></input><br></br>

                    <label for="email" className={styles.label}>Email: </label>
                    <input required placeholder="Email" onChange={props.handleEmailChange} className={styles.formChild} id='email'></input><br></br>

                    <label for="contato" className={styles.label}>Contato: </label>
                    <input required placeholder="Contact" onChange={props.handleContatoChange} className={styles.formChild} id='contato'></input><br></br>

                    <button type="submit" onClick={props.submitForm} className={styles.button}>Save</button>
                </form>
            </section>

            <section>
                <h3>Lista de Contatos</h3>
                <div className={styles.newDiv}>
                    {props.divs}
                </div>
            </section>
        </div>
    )
}


export default Contact;

//onChange={(e) => setEmail (e.target.value)}