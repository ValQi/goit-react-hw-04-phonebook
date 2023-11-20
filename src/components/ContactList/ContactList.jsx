import {StyledList, DeleteButton, ItemName,} from "./ContactList.styled"

import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <StyledList>
        {this.props.contacts.map(contact => (
          <ItemName key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteButton onClick={() => this.props.onDelete(contact.id)}>Видалити</DeleteButton>
          </ItemName>
        ))}
      </StyledList>
    );
  }
}

export default ContactList;