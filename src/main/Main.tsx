import React from "react";
import styles from './Main.module.css'
import stylesContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>I am <span>Vladimir Shits</span></h1>
                    <span>I am a frontend web developer</span>
                </div>
                <div className={styles.img}>
                    <img src={''}/>
                </div>
            </div>
        </div>
    )
}