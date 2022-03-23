import React from "react";
import styles from './Projects.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project';
import todoPrev from '../assets/img/todo.png'

export const Projects = () => {
    const backgroundForTodolist = {
        backgroundImage: 'url('+'./../assets/img/todo.png'+')'
    }
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h2 className={styles.title}>My Projects</h2>
                <div className={styles.projects}>
                    <Project title={'Todolist'} description={'One of my projects'}
                             refToProject={'https://fabskrejt.github.io/todolist-wed/'}
                             style={backgroundForTodolist}
                    />
                    <Project title={'Social Network'} description={'One of my projects'}
                             refToProject={"https://fabskrejt.github.io/social_network_react_ts_project/"}
                             style={backgroundForTodolist}
                    />
                    <Project title={'Cards'} description={'One of my projects'}
                             refToProject={'https://fabskrejt.github.io/card-learning/'}
                             style={backgroundForTodolist}
                    />
                </div>
            </div>

        </div>
    )
}