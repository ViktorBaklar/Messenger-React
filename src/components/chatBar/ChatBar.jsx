import styles from './chatBar.module.css'

const ChatBar = ({ children }) => {
    return (
        <div className={styles.chatBar}>
            {children}
        </div>
    )
}

export default ChatBar