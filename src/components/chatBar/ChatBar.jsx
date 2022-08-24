import CurrentContactWrap from './CurrentContactWrap'
import MsgWrap from './MsgWrap'
import InputMsgWrap from './InputMsgWrap'
import styles from './chatBar.module.css'

const ChatBar = () => {
    return (
        <div className={styles.chatBar}>
            <CurrentContactWrap/>
            <MsgWrap/>
            <InputMsgWrap/>
        </div>
    )
}

export default ChatBar