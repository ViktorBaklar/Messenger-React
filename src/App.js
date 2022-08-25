import { Component } from "react"
import uniqueId from 'lodash/uniqueId';
// import db from './db/db.json'
import ContactsBar from './components/contactsBar/ContactsBar'
import Header from './components/contactsBar/Header'
import ContactsList from './components/contactsBar/ContactsList'
import ChatBar from './components/chatBar/ChatBar';
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
  // state = {
  //   contacts: db,
  //   filter: '',
  // };
  state = {
    contacts: [
      {
          "id": 1,
          "name": "Alice Freeman",
          "avatar": "https://i.pravatar.cc/300?23",
          "messages": [
            {
              "messageDate": "2017-06-12T08:25:43.511Z",
              "message": "Sorry. I can't do what you asked",
              "myMessage": true
            },
            {
              "messageDate": "2017-06-12T08:36:43.511Z",
              "message": "You are the worst!",
              "myMessage": false
            }
          ]
      },
      {
        "id": 2,
        "name": "Josefina",
        "avatar": "https://i.pravatar.cc/300?45",
        "messages": [
          {
            "messageDate": "2017-04-22T16:00:43.511Z",
            "message": "Quickly come to the meeting room 1B, we have a big server isue",
            "myMessage": false
          },
          {
            "messageDate": "2017-04-22T16:06:49.511Z",
            "message": "I'm having breakfast right now, can't you wait for 10 mins?",
            "myMessage": true
          },
          {
            "messageDate": "2017-04-22T16:10:55.511Z",
            "message": "We are loosing money! Quick!",
            "myMessage": false
          }
        ]
      },
      {
        "id": 3,
        "name": "Velazquez",
        "avatar": "https://i.pravatar.cc/300?54",
        "messages": [
          {
            "messageDate": "2012-03-18T18:25:43.511Z",
            "message": "Hi, I'm waiting you",
            "myMessage": true
          }
        ]
      },
      {
        "id": 4,
        "name": "Barrera",
        "avatar": "https://i.pravatar.cc/300?21",
        "messages": [
          {
            "messageDate": "2017-02-10T13:52:43.511Z",
            "message": "Hello! Can you call me in the evening",
            "myMessage": false
          }
        ]
      }
    ],
    filter: '',
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

  filterHandler = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const regExp = new RegExp(filter, 'gi');

    if (filter) {
      return contacts.filter(contact => regExp.test(contact.name));
    }

    return contacts;
  };

  // deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="App" >
        <ContactsBar>
          <Header contactName={this.state.filter} onChange={this.filterHandler}/>
          <ContactsList items={filteredContacts} showMsg={this.deleteContact}/>
        </ContactsBar>
        <ChatBar>
          <CurrentContactWrap/>
          <MsgWrap/>
          <InputMsgWrap/>
        </ChatBar>
      </div>
    );
  }
}

export default App;
