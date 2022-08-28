import React from "react";
import styles from './chatBar.module.css'

const Messages = ({ idx, message, messageDate, myMessage, data }) => {
  return (
    <div className={myMessage?styles.myMsg:styles.contactMsg} key={idx}>
      <div className={styles.textContainer}>
        {myMessage?<span></span>:<img src={data.avatar} alt={data.name} />}
        <span className={styles.msgText}>{message}</span>
      </div>
      <span className={styles.msgDate}>{messageDate}</span>
    </div>
  )
}

export default Messages;