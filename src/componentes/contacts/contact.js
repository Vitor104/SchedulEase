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
                    <input onChange={(e) => setName (e.target.value)} className={styles.formChild} id="nome" type="text"></input><br></br>

                    <label for="email">Email: </label>
                    <input onChange={(e) => setEmail (e.target.value)} className={styles.formChild} id='email'></input><br></br>

                    <label for="contato">Contato: </label>
                    <input onChange={(e) => setContato (e.target.value)} className={styles.formChild} id='contato' type="number"></input><br></br>

                    <button type="submit" onClick={props.submitForm} className={styles.button}>Save</button>
                </form>
            </section>

            <section>
                <h3>Lista de Contatos</h3>
                <div className={styles.example}>
                    <h5>Ana Gabriela</h5>
                    <p>41281582810</p>
                    <p>afnaflvd@gmail.com</p>
                </div>
                <div className={styles.example}>
                    <h5>{props.name}</h5>
                    <p></p>
                    <p></p>
                </div>

                <div className={styles.newDiv}>
                    {props.divs}
                    <button>Delete</button>
                </div>
            </section>
        </div>
    )
}


export default Contact;

//<div className={styles.example}>
//<h5>{props.name}</h5>
//<p>{props.sobrenome}</p>
//<p>{props.email}</p>
//<p>{props.contato}</p>
//</div>