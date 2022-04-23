import React from "react";
import styles from './Skills.module.css'
import {Skill} from "./skill/Skill";
import stylesContainer from '../common/styles/Container.module.css'
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faCss3} from "@fortawesome/free-brands-svg-icons/faCss3";
import {faHtml5} from "@fortawesome/free-brands-svg-icons/faHtml5";
import redux from "../assets/img/redux.svg"
import typescript from "../assets/img/typescript.png"

export const Skills = () => {
    return (
        <div id={'skills'} className={styles.skillsBlock}>
            <div className={`${styles.container} ${stylesContainer.container}`}>
                <h2 className={styles.title}>My Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'JS'}
                           description={'I have a good knowledge of javascript and I continue to improve it.'}
                           icon={faJs}/>
                    <Skill title={'TypeScript'} description={'I use Typescript to type my projects, which simplifies the development process.'}  icon={''} localIcon={typescript}/>
                    <Skill title={'React'} description={'I have experience in creating SPA applications.' +
                    ' I like using React/redux, but that doesn\'t mean I don\'t want to try other tools.'}
                           icon={faReact}/>
                    <Skill title={'Redux'} description={'In my projects, I use redux, redux toolkit to manage the state.'} icon={''} localIcon={redux}/>
                    <Skill title={'HTML'} description={'I use it in my projects. I understand what BEM is, what semantics is and why it is important.'} icon={faHtml5}/>
                    <Skill title={'CSS'} description={'I use this in every project. I use Grid, Flex, media queries and others.'} icon={faCss3}/>
                </div>
            </div>

        </div>
    )
}