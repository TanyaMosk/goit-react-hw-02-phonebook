import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid'
import { Component } from "react";
import { ContactList } from './ContactList/ContactList';


export class App extends Component{
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
  }
  
  addContacts = newContact => {
     console.log(newContact)
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };
  
  render() {    

    return (
      <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
        this.addContacts({ ...values, id: nanoid() });
        actions.resetForm();
      }}
      >
      <Form>
        <label>Name</label>
        <Field type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required />

        <label htmlFor="lastName">Number</label>
        <Field
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />          
        <button type="submit">Add contact</button>
      </Form>
        </Formik>
        <h2>Contacts</h2>
       {/* <Filter ... /> */}       
        <ContactList contacts={this.state.contacts} />
    </div>
    )
  }
}
