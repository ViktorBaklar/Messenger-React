import Input from '../UI/input/input'
import styles from './contactsBar.module.css'

const Header = ({ filter, onChange }) => {
    return (
        <div className={styles.header}>
            <img className={styles.userAvatar} src='https://i.pravatar.cc/30?10' alt='user'/>
            {/* <div className={styles.search}> */}
                <Input 
                    // className={styles.search} 
                    type='text' 
                    name='filter'
                    placeHolder='Search or start new chat' 
                    value={filter} 
                    onChange={onChange}
                />
            {/* </div> */}
        </div>
    )
}

export default Header