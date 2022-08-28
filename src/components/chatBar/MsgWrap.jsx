import React from "react";
import shortid from 'shortid'
import Messages from './Messages'
import styles from './chatBar.module.css'

const MsgWrap = ({ data }) => {
    return (
        <div className={styles.msgWrap}>
            {data.messages.map(({ message, messageDate, myMessage }) => {
                let date = new Date(messageDate)
                let idx = shortid.generate()
                return (
                    <Messages
                        key={idx}
                        message={message}
                        messageDate={date.toString().slice(4, 21)}
                        myMessage={myMessage}
                        data={data}
                    />
                )
            })}
        </div>
    )
}

export default MsgWrap