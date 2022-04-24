import React from "react";
import styles from './Nav.module.css'
import {Link} from 'react-scroll'


export const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link to={'main'} smooth={true} duration={500}>Main</Link>
            <Link to={'skills'} smooth={true} offset={-70} duration={500}>Skills</Link>
            <Link to={'projects'} smooth={true} offset={-70} duration={500}>Projects</Link>
            <Link to={'contacts'} smooth={true} offset={-70} duration={500}>Contacts</Link>
        </div>
    )
}
