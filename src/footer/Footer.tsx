import React from "react";
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <h2>Vladimir Shits</h2>
                <div className={styles.footerImgContainer}>
                    <div className={styles.footerImg}></div>
                    <div className={styles.footerImg}></div>
                    <div className={styles.footerImg}></div>
                    <div className={styles.footerImg}></div>
                </div>
            <div> © 2022 Все права защищены</div>
        </div>
    )
}