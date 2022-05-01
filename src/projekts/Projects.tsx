import React from "react";
import styles from './Projects.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project';
import todoPrev from '../assets/img/todo.png'
import socialNetwork from '../assets/img/socialNetwork.png'
import cards from '../assets/img/cards.png'

export const Projects = () => {
    const backgroundForTodolist = {
        backgroundImage: `url(${todoPrev})`,
    }
    const backgroundForSocialNetwork = {
        backgroundImage: `url(${socialNetwork})`
    }
    const backgroundForCards = {
        backgroundImage: `url(${cards})`
    }

    return (
        <div id={'projects'} className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h2 className={styles.title}>My Projects</h2>
                <div className={styles.projects}>
                    <Project title={'Todolist'}
                             description={'TypeScript, React, Redux, MUI, Redux-thunk, ' +
                             'Router-dom, Axios, Storybook, Formik'}
                             refToProject={'https://fabskrejt.github.io/todolist-wed/'}
                             style={backgroundForTodolist}
                    />
                    <Project title={'Social Network'}
                             description={'TypeScript, React, Redux, Redux-thunk, Router-dom, Axios, Formik'}
                             refToProject={"https://fabskrejt.github.io/social_network_react_ts_project/"}
                             style={backgroundForSocialNetwork}
                    />
                    <Project title={'Cards'}
                             description={'TypeScript, React, Redux, Redux-thunk, Router-dom, Axios, Formik, YUP, MUI, SASS'}
                             refToProject={'https://fabskrejt.github.io/card-learning/'}
                             style={backgroundForCards}
                    />
                </div>
            </div>

        </div>
    )
}