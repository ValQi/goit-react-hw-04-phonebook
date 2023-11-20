import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormContainer, StyledButton, StyledInput} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (this.props.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`Контакт з таким ім'ям вже існує`);
      return;
    }
    this.props.onSubmit({ name, number, id: nanoid() });
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <h3>Name</h3>
        <StyledInput type="text" name="name" required value={this.state.name} onChange={this.handleInputChange} />
        <h3>Number</h3>
        <StyledInput type="tel" name="number" required value={this.state.number} onChange={this.handleInputChange} />
        <StyledButton type="submit">Додати контакт</StyledButton>
      </FormContainer>
    );
  }
}

export default ContactForm;