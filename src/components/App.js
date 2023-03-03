import { Component } from 'react';
import { Layout } from './Layout';
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import initContacts from '../contacts.json';

export class App extends Component {

  LS_CONTACTS_KEY = 'PhoneBook_Contacts';

  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const jsonContacts = localStorage.getItem(this.LS_CONTACTS_KEY);
    if (jsonContacts !== null) {
      try {
        this.setState({ contacts: JSON.parse(jsonContacts) });
        return;
      } catch (err) {
        console.error(`Error: invalid saved contacts in LocalStorage: ${this.LS_CONTACTS_KEY} - ${err}`);
      }
    }

    this.setState({ contacts: [...initContacts] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      try {
        localStorage.setItem(this.LS_CONTACTS_KEY, JSON.stringify(this.state.contacts));
      } catch (err) {
        console.error(`Error: failure saving contacts in LocalStorage: ${this.LS_CONTACTS_KEY} - ${err}`);
      }
    }
  }

  handleAddContact = newContact => {
    const normName = newContact.name.toLowerCase();
    if (this.state.contacts.find(({ name }) => name.toLowerCase() === normName)) {
      alert(`${newContact.name} is already in contacts!`);
      return false;
    }
    this.setState(prevState => ({ contacts: [...prevState.contacts, newContact] }));
    return true;
  }

  handleDeleteContact = idToDel => this.setState(prevState => ({
    contacts: prevState.contacts.filter(({id}) => (id !== idToDel))
  }));

  onFilterChange = evt => this.setState({ filter: evt.currentTarget.value }); 

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const normFilter = filter.toLowerCase();
    return contacts.filter(({name}) => name.toLowerCase().includes(normFilter));
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact}/>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.onFilterChange} />
        <ContactList contacts={visibleContacts} onDeleteContact={this.handleDeleteContact} />
      </Layout>
    );
  }  
};
