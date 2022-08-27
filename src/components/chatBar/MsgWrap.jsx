import React from "react";
import Messages from './Messages'
import styles from './chatBar.module.css'

const MsgWrap = ({ data, msgs }) => {
    return (
        <div className={styles.msgWrap}>
            {/* {data.map(({id, avatar, messages }) => {
                return (
                    <Messages
                        id={id}
                        avatar={avatar}
                        messages={messages}
                    />
                )
            })} */}
            {msgs.map(({ index, message, messageDate, myMessage }) => {
                let date = new Date(messageDate)
                return (
                    <Messages
                        key={index}
                        message={message}
                        messageDate={date.toString().slice(4, 21)}
                        myMessage={myMessage}
                    />
                )
            })}
            {/* {data.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div className ={styles.messageContainer} >
                            <Messages messages={item.messages} avatar={item.avatar}/>
                
                        </div>
                    </React.Fragment>
                );
            })} */}

            {/* {msgs.map(({ message, messageDate, myMessage }) => {
                return (
                    <div className={myMessage?styles.myMsg:styles.contactMsg}>
                        <div className={styles.textContainer}>
                            <img src={data.avatar} alt={data.name} />
                            <span className={styles.msgText}>{message}</span>
                        </div>
                        <span className={styles.msgDate}>{messageDate}</span>
                    </div>
                )
            })} */}
            {/* {msgs.map(({ message, messageDate, myMessage, data }) => {
                return (
                    <div className={myMessage?styles.myMsg:styles.contactMsg}>
                        <div className={styles.textContainer}>
                            <img src={data.avatar} alt={data.name} />
                            <span className={styles.msgText}>{message}</span>
                        </div>
                        <span className={styles.msgDate}>{messageDate}</span>
                    </div>
                )
            })} */}
        </div>
    )
}

export default MsgWrap