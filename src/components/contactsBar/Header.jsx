// import { Component } from "react"
import Input from '../UI/input/input'
import Button from '../UI/button/button'
import styles from './contactsBar.module.css'
import {ReactComponent as SearchIcon} from '../../svg/search.svg'
// import {ReactComponent as AddButton} from '../../svg/add.svg'

const Header = ({ filter, onChange, onSubmit, onClick }) => {
    return (
        <div className={styles.header}>
            <img className={styles.userAvatar} src='https://i.pravatar.cc/30?10' alt='user'/>
            <div className={styles.formWrap}>
                <form className={styles.search} onSubmit={onSubmit}>
                    <SearchIcon className={styles.searchIcon}/>
                    <Input 
                        // className={styles.search} 
                        type='text' 
                        name='filter'
                        placeHolder='Search or start new chat' 
                        value={filter}
                        onChange={onChange}
                    />
                </form>
                {/* <button className={styles.addButton} onClick={onClick}>+</button> */}
                <Button className={styles.addButton} onClick={onClick}>+</Button>
            </div>
        </div>
    )
}

export default Header