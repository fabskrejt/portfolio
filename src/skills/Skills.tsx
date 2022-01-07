import React from "react";
import styles from './Skills.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.container}>
            <div>Мои скилы</div>
            <div>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
        </div>
    )
}