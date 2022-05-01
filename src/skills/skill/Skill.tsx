import React from "react";
import styles from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type SkillPropsType = {
    title: string
    description: string
    icon: any
    localIcon?: any
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.skill}>
            {
                props.icon
                    ? <FontAwesomeIcon icon={props.icon} size={'5x'} color={'#fec544'}/>
                    : <img src={props.localIcon} alt={'iconRedux'} style={{'width':'70px', 'height': '70px'}}/>
            }
            <h3>{props.title}</h3>

            <span className={styles.description}>{props.description}</span>
        </div>
    )
}