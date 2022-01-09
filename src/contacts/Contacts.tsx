import React from "react";
import styles from './Contacts.module.css'
import stylesContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h2>Contacts</h2>
                <form>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button>Submit</button>
            </div>

        </div>
    )
}

