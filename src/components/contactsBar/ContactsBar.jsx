import styles from './contactsBar.module.css'

const ContactsBar = ({ children }) => {
    return (
        <div className={styles.contactsBar}>
            {children}
        </div>
    )
}

export default ContactsBar