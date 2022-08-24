import styles from './chatBar.module.css'

const CurrentContactWrap = ({id, avatar, name}) => {
    return (
        <div className={styles.currentContactWrap}>
            <div className={styles.imgWrap}>
                <img src={avatar} alt="avatar" />
            </div>
            <h1 className={styles.contactName}>{name}</h1>
        </div>
    )
}

export default CurrentContactWrap