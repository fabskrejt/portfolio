import React from "react";
import styles from './Main.module.css'
import stylesContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                <span>Hi There</span>
                    <h1>I am Vladimir Sits</h1>
                    <span>Frontend Developer</span>
                </div>
                <div className={styles.img}>
                    <img src={''}/>
                </div>
            </div>
        </div>
    )
}