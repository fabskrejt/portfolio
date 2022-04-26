import React from 'react';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projekts/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import styles from "./App.module.css"

function App() {
    console.log('rendered')
    return (
        <div className={styles.App}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
