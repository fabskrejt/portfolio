import React from "react";
import styles from './Header.module.css'

export const Header = ()=>{
    return(
        <div className={styles.header}>
            <div className={styles.container}>
                <span>'Главная'</span>
                <span>'Скилы'</span>
                <span>'Работы'</span>
                <span>'Что-то ещe'</span>
            </div>
        </div>
    )
}