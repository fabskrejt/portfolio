import React from "react";
import styles from './Footer.module.scss'
import telegram from "../assets/img/tg.png"
import linkedIn from "../assets/img/linkedIn.png"
import gh from "../assets/img/gh.png"
import cw from "../assets/img/cw.png"

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <h2>Vladimir Shits</h2>
            <div className={styles.footerImgContainer}>
                <div className={styles.footerImg}>
                    <a href={'https://t.me/fabskrejt'} target={'_blank'}>
                        <img src={telegram} alt={'telegram icon'}/>
                    </a>
                </div>
                <div className={styles.footerImg}>
                    <a href={'https://www.linkedin.com/in/vladimir-shits/'} target={'_blank'}>
                        <img src={linkedIn} alt={'linkedIn icon'}/>
                    </a>
                </div>
                <div className={styles.footerImg}>
                    <a href={'https://github.com/fabskrejt'} target={'_blank'}>
                        <img src={gh} alt={'gitHub icon'}/>
                    </a>
                </div>
                <div className={styles.footerImg}>
                    <a href={'https://www.codewars.com/users/vladimir_shits'} target={'_blank'}>
                        <img src={cw} alt={'code wars icon'}/>
                    </a>
                </div>
            </div>
            <div> © 2022 All rights reserved</div>
        </div>
    )
}
