import ContactsList from './ContactsList'
import Header from './Header'
import styles from './contactsBar.module.css'

const ContactsBar = () => {
    return (
        <div className={styles.contactsBar}>
            <Header />
            <ContactsList />
        </div>
    )
}

export default ContactsBar