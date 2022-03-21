import React from "react";
import styles from './Skill.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



type SkillPropsType = {
    title: string
    description: string
    icon:any
}

export const Skill = (props:SkillPropsType) => {
return(
    <div className={styles.skill}>
        <FontAwesomeIcon icon={props.icon} size={'5x'} color={'#fec544'}/>
        <h3>{props.title}</h3>

        <span className={styles.description}>{props.description}</span>
    </div>
)
}