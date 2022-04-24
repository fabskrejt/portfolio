import React from "react";
import styles from './Contacts.module.css'
import stylesContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div id={'contacts'} className={styles.contacts}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h2>Contacts</h2>
                <form>
                    <input placeholder={'name'}/>
                    <input  placeholder={'e-mail'}/>
                    <textarea placeholder={'your comments'}/>
                </form>
                <button>Submit</button>
            </div>

        </div>
    )
}

