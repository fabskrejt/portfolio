import React from "react";
import styles from './Project.module.css'

type ProjectPropsType ={
    title: string
    description:string
}
export const Project =(props: ProjectPropsType)=>{
    return(
        <div className={styles.project}>
                <div className={styles.previewImg}>
                    <button>Watch</button>
                </div>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}