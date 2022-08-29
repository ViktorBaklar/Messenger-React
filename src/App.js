import { Component } from "react";
import shortid from 'shortid';
import { Data } from './db/data';
import ContactsBar from './components/contactsBar/ContactsBar';
import Header from './components/contactsBar/Header';
import ContactsList from './components/contactsBar/ContactsList';
import ChatBar from './components/chatBar/ChatBar';
import CurrentContactWrap from './components/chatBar/CurrentContactWrap';
import MsgWrap from './components/chatBar//MsgWrap';
import InputMsgWrap from './components/chatBar//InputMsgWrap';
import Modal from './components/Modal/index';
import AddContactForm from "./components/AddContactForm/AddContactForm";
import './App.css';

class App extends Component {
  state = {
    contacts: Data,
    filter: '',
    activeID: 1,
    open: false,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) this.setState({ contacts: parsedContacts });
    const activeID = localStorage.getItem('activeID');
    const parsedactiveID = JSON.parse(activeID);
    if (parsedactiveID) this.setState({ activeID: parsedactiveID });
  };

  componentDidUpdate(prevState) {
    const { contacts: nowContacts, activeID: nowactiveID } = this.state;
    const { contacts: prevContacts, activeID: prevactiveID } = prevState;
    if (nowContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nowContacts));
    };
    if (nowactiveID !== prevactiveID) {
      localStorage.setItem('activeID', JSON.stringify(nowactiveID));
    };
  };

  addContact = ({ name, avatar, messageDate }) => {
    const contact = {
      id: shortid.generate(),
      name,
      avatar,
      messages: [
        {
          messageDate,
          message: '',
          myMessage: true,
        }
      ]
    }

    const { contacts } = this.state

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
      activeID: contact.id
    }));
    this.hendleToggleModal()
  };

  addMessage = (message, messageDate, contactIdAddMessage, myMessage) => {
    const { contacts, activeID } = this.state;
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
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    
    this.setState(({ activeID }));
    localStorage.setItem('activeID', JSON.stringify(this.state.activeID))
    
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

  activeContactChange = id => {
    this.setState(() => {
      return {activeID: id };
    });
  }

  showContactData = () => {
    const { activeID, contacts } = this.state;
    const activeContact = contacts.filter(contact => contact.id === activeID)
    return activeContact[0]
  }

  hendleToggleModal = (isOpen) => {
    this.setState((prevState) => ({open: isOpen ?? !prevState.open}))
  }

  render() {
    const filteredContacts = this.getFilteredContacts();
    const currentContact = this.showContactData();
    const { open } = this.state
    return (
      <div className="App" >
        <ContactsBar>
          <Header onClick={this.hendleToggleModal} contactName={this.state.filter} onChange={this.filterHandler}/>
          <ContactsList items={filteredContacts} onContactClick={this.activeContactChange}/>
        </ContactsBar>
        <ChatBar>
          <CurrentContactWrap data={currentContact}/>
          <MsgWrap data={currentContact}/>
          <InputMsgWrap addMessage={this.addMessage} activeID={this.state.activeID}/>
        </ChatBar>
        <Modal open={open} onClose={this.hendleToggleModal}>
          <AddContactForm onSubmit={this.addContact}/>
        </Modal>
      </div>
    );
  }
}

export default App;
