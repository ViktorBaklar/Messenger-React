import PropTypes from 'prop-types'
import styles from './contactsBar.module.css'

const ContactsListItem = ({id, name, lastDate, lastMsg, avatar, onClick}) => {
    return (
        <li className={styles.contactsListItem} onClick={onClick}>
            <div className={styles.avatarImg}>{avatar}</div>
            <div className={styles.contactName}>{name}</div>
            <div className={styles.contactLastDate}>{lastDate}</div>
            <div className={styles.contactLastMsg}>{lastMsg}</div>
        </li>
    )
}

export default ContactsListItem

ContactsListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastDate: PropTypes.string.isRequired,
    lastMsg: PropTypes.string.isRequired,
  }