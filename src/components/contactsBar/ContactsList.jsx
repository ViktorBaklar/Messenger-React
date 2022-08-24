
// import ContactsListItem from './ContactsListItem'
import styles from './contactsBar.module.css'

const ContactsList = (/* {items, onClick} */) => {
    // const store = useStore()
    // const contactsList = store.contacts

    return (
        <div className={styles.contactsList}>
            <h1 className={styles.chats}>
                Chats
            </h1>
            <ul className={styles.contactsListWrapper}>
                {/* {items.map(({id, name, lastDate, lastMsg, avatar}) => {
                    return (
                        <ContactsListItem 
                        key={id}
                        id={id}
                        avatar={avatar}
                        name={name}
                        lastDate={lastDate}
                        lastMsg={lastMsg}
                        onClick={onClick}
                        />
                    )
                })} */}
            </ul>
        </div>
    )
}

export default ContactsList