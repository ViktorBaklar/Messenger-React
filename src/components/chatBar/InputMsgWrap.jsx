// import styles from './chatBar.module.css'

// const InputMsgWrap = ({value, onSubmit}) => {
    //     return (
        //         <div className={styles.inputMsgWrap}>
        //             <Input placeHolder='Type your message' value={value} onSubmit={onSubmit}/>
        //         </div>
        //     )
        // }
        
        // export default InputMsgWrap
        
import { Component } from "react";
import Input from '../UI/input/input'
import styles from './chatBar.module.css';

class InputMsgWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageDate: "",
      contactIdAddMessage: 1,
    };
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.contactIdAddMessage !== this.props.activeID) {
    this.setState(() => ({contactIdAddMessage: this.props.activeID}))}
  };

  sendNewMessage = (e) => {
    e.preventDefault();
    const { contactIdAddMessage } = this.state;
    const currentDate = new Date().toLocaleString("en-US");
    this.props.addMessage(this.state.message, currentDate, contactIdAddMessage, true);
    this.setState({message: ""}); 
    this.answerFromChuck(contactIdAddMessage);
  };
 
  async answerFromChuck(contactIdAddMessage) {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const answer = await response.json();
    const currentDate = new Date().toLocaleString("en-US");
    setTimeout(() => {
    this.props.addMessage(answer.value, currentDate, contactIdAddMessage, false);}, 10000);
    this.setState({message: "", messageDate: " "})
  
  }

  render() {
    return (
      <div className={styles.inputMsgWrap}>
        <form className={styles.msgInputForm} onSubmit={this.sendNewMessage}>
            <Input
                type="text"
                name="message"
                value={this.state.message}
                className={styles.msgInput}
                placeholder="Type your message"
                onChange={this.onInputChange}
                required
            />
            <button
                className={styles.button} type="submit"> 
            </button>
        </form>
      </div>
    );
  }
}

export default InputMsgWrap;