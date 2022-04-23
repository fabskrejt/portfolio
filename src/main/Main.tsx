import React from "react";
import styles from './Main.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import photo from '../assets/img/mainPhoto.jpg'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import imf from '../assets/img/typescript.png'

const particlesOpt ={
    fpsLimit: 60,
    "fullScreen": {
        "enable": false,
        "zIndex": 1
    },
    particles: {

        color: {
            value: "#0a57c7"
        },
        links: {
            enable: true,
            color: "#00ffa6",
            distance: 130,
        },
        move: {
            enable: true
        }
    }
}

export const Main = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    const particlesLoaded = () => {
        return Promise.resolve()
    };

    return (
        <div className={styles.mainBlock}>
            <Particles
                canvasClassName={styles.particlesCanvas}
                className={styles.particles}
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesOpt}
            />
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>I am <span>Vladimir Shits</span></h1>
                    <span>I am a frontend web developer</span>
                </div>
                <div className={styles.img}>
                    <img src={photo} alt={'ownerPhoto'}/>
                </div>
            </div>
        </div>
    )
}
