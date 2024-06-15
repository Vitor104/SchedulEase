import React from "react";
import styles from './contact.module.css';

function Contact () {
    return (
        <div className={styles.container}>
            <h2>Add Contacts</h2>

            <section>
                <form className={styles.formulario}>
                    <label for='nome'>Nome: </label>
                    <input className={styles.formChild} id="nome" type="text"></input><br></br>
                    <label for='contato'>Contato: </label>
                    <input className={styles.formChild} id="contato" type="number"></input><br></br>
                    <label for="email">Email: </label>
                    <input className={styles.formChild} id='email'></input><br></br>
                    <button type="submit" className={styles.button}>Save</button>
                </form>
            </section>

            <section>
                <h3>Lista de Contatos</h3>
                <div className={styles.example}>
                    <h5>Ana Gabriela</h5>
                    <p>41281582810</p>
                    <p>afnaflvd@gmail.com</p>
                </div>
            </section>
        </div>
    )
}


export default Contact;