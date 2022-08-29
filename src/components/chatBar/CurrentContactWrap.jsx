import React from "react";
import styles from './chatBar.module.css'

const CurrentContactWrap = ({ data }) => {
    return (
        <div className={styles.currentContactWrap}>
            <div className={styles.imgWrap}>
                <img src={data.avatar} alt="avatar" />
            </div>
            <div className={styles.contactName}>{data.name}</div>
        </div>
    )
}

export default CurrentContactWrap