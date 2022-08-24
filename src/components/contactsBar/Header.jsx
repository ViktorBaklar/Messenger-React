import Input from '../UI/input/input'
import styles from './contactsBar.module.css'

const Header = ({ contactName, onChange }) => {
    return (
        <div className={styles.header}>
            <img className={styles.userAvatar} src='' alt='name'/>
                <div className={styles.search}>
                    <Input 
                    // className={styles.search} 
                    type='text' 
                    placeHolder='Search or start new chat' 
                    value={contactName} 
                    onChange={onChange}/>
                </div>
        </div>
    )
}

export default Header