import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Form } from "./components/Form/Form";
import { Contacts } from "./components/Contacts/Contacts";
import { Filter } from "./components/Filter/Filter";
export interface contactsType {
  id?: any;
  name: string;
  number: string;
}
interface stateProps {
  contacts: contactsType[];
  filter: string;
}
export class App extends Component<{}, stateProps> {
  state = {
    contacts: [
      { id: nanoid(7), name: "Rosie Simpson", number: "459-12-56" },
      { id: nanoid(7), name: "Hermione Kline", number: "443-89-12" },
      { id: nanoid(7), name: "Eden Clements", number: "645-17-79" },
      { id: nanoid(7), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitData = (objContact: contactsType) => {
    const { contacts } = this.state;
    const addContact = {
      id: nanoid(7),
      ...objContact,
    };

    const isFindCopyContact = contacts.find(
      (el) =>
        el.name.toLocaleLowerCase() === objContact.name.toLocaleLowerCase()
    );

    if (isFindCopyContact) {
      alert(`${objContact.name} is in your Contacts`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, addContact],
    }));
  };

  deleteContact = (contactId: string) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.getVisibleFilter();

    return (
      <div style={{ display: "flex" }}>
        <div>
          <h1>Phonebook</h1>
          <Form onData={this.formSubmitData} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <Contacts
            contacts={filterContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

// const Container = styled.div`
//   display: flex;
// `;
