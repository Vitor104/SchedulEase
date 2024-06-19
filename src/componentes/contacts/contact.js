import React, {useState} from "react";
import styles from './contact.module.css';

function Contact (props) {

    const {name, setName} = props;
    const {email, setEmail} = props;
    const {contato, setContato} = props;
   
    
    return (
        <div className={styles.container}>
            <h2>Add Contacts</h2>

            <section>
                <form className={styles.formulario}>
                    <label for='nome'>Nome: </label>
                    <input required  placeholder="Name" onChange={(e) => setName (e.target.value)} className={styles.formChild} id="nome" type="text"></input><br></br>

                    <label for="email">Email: </label>
                    <input required placeholder="Email" onChange={(e) => setEmail (e.target.value)} className={styles.formChild} id='email'></input><br></br>

                    <label for="contato">Contato: </label>
                    <input required placeholder="Contact" onChange={(e) => setContato (e.target.value)} className={styles.formChild} id='contato'></input><br></br>

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

