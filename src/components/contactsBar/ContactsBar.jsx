// import ContactsList from './ContactsList'
// import Header from './Header'
import styles from './contactsBar.module.css'

const ContactsBar = ({ children }) => {
    return (
        <div className={styles.contactsBar}>
            {children}
        </div>
    )
}

export default ContactsBar