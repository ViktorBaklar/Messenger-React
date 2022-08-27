import React from "react";
import styles from './chatBar.module.css'

// const Messages = ({ ...props }) => (
//   <>
//     {props.messages.map((item, index) => (
//       <div className={item.myMessage?styles.myMsg:styles.contactMsg} key={index}>
//         <div className={styles.textContainer}>
//           <img src={props.avatar} alt="" />
//           <span className={styles.msgText}>{item.message}</span>
//         </div>
//         <span className={styles.msgDate}>{item.messageDate}</span>
//       </div>
//     ))}
//   </>
// );

const Messages = ({ index, message, messageDate, myMessage }) => {
  return (
    <div className={myMessage?styles.myMsg:styles.contactMsg} key={index}>
      <div className={styles.textContainer}>
        {/* <img src={data.avatar} alt="" /> */}
        <span className={styles.msgText}>{message}</span>
      </div>
         <span className={styles.msgDate}>{messageDate}</span>
    </div>
  )
}

export default Messages;