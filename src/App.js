import { Component } from "react"
import uniqueId from 'lodash/uniqueId';
import { Data } from './db/data'
import ContactsBar from './components/contactsBar/ContactsBar'
import Header from './components/contactsBar/Header'
import ContactsList from './components/contactsBar/ContactsList'
import ChatBar from './components/chatBar/ChatBar';
// import CurrentContactMsg from './components/chatBar/CurrentContactMsg'
import CurrentContactWrap from './components/chatBar/CurrentContactWrap'
import MsgWrap from './components/chatBar//MsgWrap'
import InputMsgWrap from './components/chatBar//InputMsgWrap'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <ContactsBar/>
//       <ChatBar/>
//     </div>
//   );
// }

class App extends Component {
  state = {
    contacts: Data,
    filter: '',
    activeID: 1,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    // console.log(parsedContacts)
    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevState) {
    const { contacts: nowContacts } = this.state;
    const { contacts: prevContacts } = prevState;
    if (nowContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nowContacts));
    }
  }

  addContact = ({ name }) => {
    const contact = {
      id: uniqueId("prefix-"),
      name,
      avatar: 'https://i.pravatar.cc/30?20',
      messages: [
        {
          messageDate: '',
          message: "",
          myMessage: true
        }
      ]
    }

    const { contacts } = this.state

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      // this.setState({ filter: name.currentTarget.value });
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }));
  };

  addMessage = (message, messageDate, contactIdAddMessage, myMessage) => {
    const { contacts } = this.state;
    const newMessage = {
      message,
      messageDate,
      myMessage,
    };
  // eslint-disable-next-line
    contacts.map((item, index) => {
      if (item.id === contactIdAddMessage) 
      {item.messages.push(newMessage);
      contacts.push(...contacts.splice(0,index))
    }});
    
    this.setState(({ contacts }));
    //console.log(data);
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    
  };

  filterHandler = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const regExp = new RegExp(filter, 'gi');
    
    if (filter) {
      return contacts.filter(contact => regExp.test(contact.name));
    }
    
    return contacts.sort(
      (a, b) =>
        new Date(b.messages.at(-1).messageDate.toString()) -
        new Date(a.messages.at(-1).messageDate.toString())
    );
  };

  // setActiveID = () => {
  //   const { contacts } = this.state
  //   const sc = contacts.sort(
  //     (a, b) =>
  //       new Date(b.messages.at(-1).messageDate.toString()) -
  //       new Date(a.messages.at(-1).messageDate.toString())
  //     );
  //   this.setState(() => ({
  //     activeID: sc[0].id
  //   } ))
  // }

  activeContactChange = id => {
    this.setState(() => {
      return {activeID: id };
    });
  }

  // showMsg = () => {
  //   const { activeID, contacts } = this.state;
  //   const activeContact = contacts.filter(contact => contact.id === activeID)
  //   return activeContact[0]
  // }
  showContactData = () => {
    const { activeID, contacts } = this.state;
    const activeContact = contacts.filter(contact => contact.id === activeID)
    return activeContact[0]
  }
  showMsg = () => {
    const { activeID, contacts } = this.state;
    const activeContact = contacts.filter(contact => contact.id === activeID)
    return activeContact[0].messages
  }

  render() {
    const filteredContacts = this.getFilteredContacts();
    // const currentContact = this.showMsg();
    const currentContact = this.showContactData();
    const contactMsgs = this.showMsg();
    // const contactMsgs = currentContact.messages
    return (
      <div className="App" >
        <ContactsBar>
          <Header onSubmit={this.addContact} contactName={this.state.filter} onChange={this.filterHandler}/>
          <ContactsList items={filteredContacts} onContactClick={this.activeContactChange}/>
        </ContactsBar>
        <ChatBar>
          <CurrentContactWrap data={currentContact}/>
          <MsgWrap data={currentContact} msgs={contactMsgs}/>
          <InputMsgWrap addMessage={this.addMessage} activeID={this.state.activeID}/>
        </ChatBar>
      </div>
    );
  }
}

export default App;
