import React from "react";
import styles from './Main.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import photo from '../assets/img/mainPhoto.jpg'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import ReactTypingEffect from 'react-typing-effect'

const particlesOpt = {
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
        <div id={'main'} className={styles.mainBlock}>
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
                    <span>I am a </span>
                    <ReactTypingEffect
                        text='frontend web developer'
                        typingDelay={1000}
                        speed={100}
                        eraseSpeed={200}
                        eraseDelay={3000}
                    />
                </div>
                <div className={styles.img}>
                    <img src={photo} alt={'ownerPhoto'}/>
                </div>
            </div>
        </div>
    )
}
