
import ContactsListItem from './ContactsListItem'
import styles from './contactsBar.module.css'

const ContactsList = ({ items, onContactClick }) => {
    // const store = useStore()
    // const contactsList = store.contacts

    return (
        <div className={styles.contactsList}>
            <h1 className={styles.chats}>
                Chats
            </h1>
            <ul className={styles.contactsListWrapper}>
                {items.map(({id, name, messages, avatar}) => {
                    let date = new Date(messages.at(-1).messageDate)
                    return (
                        <ContactsListItem 
                            key={id}
                            id={id}
                            avatar={avatar}
                            name={name}
                            lastDate={date.toDateString().slice(4, 15)}
                            lastMsg={messages.at(-1).message}
                            onContactClick={onContactClick}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ContactsList