import React from "react";
import styles from './Skills.module.css'
import {Skill} from "./skill/Skill";
import stylesContainer from '../common/styles/Container.module.css'

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styles.container} ${stylesContainer.container}`}>
                <h2 className={styles.title}>My Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'CSS'} description={'Som text for test'}/>
                    <Skill title={'React'} description={'Som text for test. Just my skill, one of a million'}/>
                    <Skill title={'JS'} description={'Som text for test. I know it. It is easy for me if you don\'t ask about it' }/>
                </div>
            </div>

        </div>
    )
}