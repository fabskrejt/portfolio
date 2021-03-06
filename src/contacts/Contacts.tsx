import styles from './Contacts.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import axios from "axios";

export const Contacts = () => {

    const submitForm = (e: any) => {
        e.preventDefault()
        const formData = e.currentTarget
        const name = formData[0].value
        const email = formData[1].value
        const comment = formData[2].value

        axios.post('https://nodejs-email-sendler.herokuapp.com/sendmsg', {name, email, comment})
            .then(res => alert(res.data ))

        e.currentTarget.reset()
    }

    return (
        <div id={'contacts'} className={styles.contacts}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h2>Contacts</h2>
                <form onSubmit={submitForm}>
                    <input placeholder={'name'}/>
                    <input type={"email"} placeholder={'e-mail'}/>
                    <textarea placeholder={'your comments'}/>
                    <button type={"submit"}>Submit</button>
                </form>
            </div>
        </div>
    )
}

