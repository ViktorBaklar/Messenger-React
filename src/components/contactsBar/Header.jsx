import Input from '../UI/input/input'
import Button from '../UI/button/button'
import styles from './contactsBar.module.css'
import {ReactComponent as SearchIcon} from '../../svg/search.svg'

const Header = ({ filter, onChange, onSubmit, onClick }) => {
    return (
        <div className={styles.header}>
            <img className={styles.userAvatar} src='https://i.pravatar.cc/30?img=2' alt='user'/>
            <div className={styles.formWrap}>
                <form className={styles.search} onSubmit={onSubmit}>
                    <SearchIcon className={styles.searchIcon}/>
                    <Input 
                        type='text' 
                        name='filter'
                        placeHolder='Search or start new chat' 
                        value={filter}
                        onChange={onChange}
                    />
                </form>
                <Button className={styles.addButton} onClick={onClick}>+</Button>
            </div>
        </div>
    )
}

export default Header