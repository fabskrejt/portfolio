import React from "react";
import styles from './Skills.module.css'
import {Skill} from "./skill/Skill";
import stylesContainer from '../common/styles/Container.module.css'
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faCss3} from "@fortawesome/free-brands-svg-icons/faCss3";
import {faHtml5} from "@fortawesome/free-brands-svg-icons/faHtml5";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styles.container} ${stylesContainer.container}`}>
                <h2 className={styles.title}>My Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'JS'}
                           description={'Som text for test. I have a good knowledge'}
                           icon={faJs}/>
                    <Skill title={'React'} description={'Som text for test. Just my skill, one of a million'}
                           icon={faReact}/>
                    <Skill title={'HTML'} description={'Som text for test'} icon={faHtml5}/>
                    <Skill title={'CSS'} description={'Som text for test'} icon={faCss3}/>
                    <Skill title={'TypeScript'} description={'Som text for test'} icon={faCss3}/>
                    <Skill title={'Redux'} description={'Som text for test'} icon={faCss3}/>
                </div>
            </div>

        </div>
    )
}