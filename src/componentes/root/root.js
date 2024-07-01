import React from "react";
import styles from './root.module.css';

function Root() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Welcome to your Appointment Planner!</h1>
            <section className={styles.containerInfo}>
                <div className={styles.info}>
                    <p className={styles.p}>How to get started</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.p}>Funcionalities</p>
                </div>
            </section>
            
        </div>
    )
}


export default Root;