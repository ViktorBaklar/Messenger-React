import Input from '../UI/input/input'
import styles from './chatBar.module.css'

const InputMsgWrap = ({value, onSubmit}) => {
    return (
        <div className={styles.inputMsgWrap}>
            <Input placeHolder='Type your message' value={value} onSubmit={onSubmit}/>
        </div>
    )
}

export default InputMsgWrap