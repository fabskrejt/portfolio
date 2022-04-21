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
                           description={'I have a good knowledge of javascript and I continue to improve it.'}
                           icon={faJs}/>
                    <Skill title={'React'} description={'I have experience in creating SPA applications.' +
                    ' I like using React/redux, but that doesn\'t mean I don\'t want to try other tools.'}
                           icon={faReact}/>
                    <Skill title={'HTML'} description={'I use it in my projects. I understand what BEM is and why it is needed.'} icon={faHtml5}/>
                    <Skill title={'CSS'} description={'Som text for test'} icon={faCss3}/>
                    <Skill title={'TypeScript'} description={'Som text for test'} icon={faCss3}/>
                    <Skill title={'Redux'} description={'Som text for test'} icon={faCss3}/>
                </div>
            </div>

        </div>
    )
}