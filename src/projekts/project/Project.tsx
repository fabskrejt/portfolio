import React from "react";
import styles from './Project.module.css'

type ProjectPropsType ={
    title: string
    description:string
    refToProject:string
}
export const Project =(props: ProjectPropsType)=>{
    return(
        <div className={styles.project}>
                <div className={styles.previewImg}>
                    <a target={'_blank'} href={props.refToProject} >Watch</a>
                </div>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}