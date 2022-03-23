import React from "react";
import styles from './Projects.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h2 className={styles.title}>My Projects</h2>
                <div className={styles.projects}>
                    <Project title={'Todolist'} description={'One of my projects'}
                             refToProject={'https://fabskrejt.github.io/todolist-wed/'}/>
                    <Project title={'Social Network'} description={'One of my projects'}
                             refToProject={"https://fabskrejt.github.io/social_network_react_ts_project/"}/>
                    <Project title={'Cards'} description={'One of my projects'}
                             refToProject={'https://fabskrejt.github.io/card-learning/'}/>
                </div>
            </div>

        </div>
    )
}