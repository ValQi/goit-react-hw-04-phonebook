import { InputField } from './FilterSearch.styled.jsx';

import React, { Component } from 'react';

class Filter extends Component {
  handleInputChange = event => {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <InputField type="text" name="filter" value={this.props.value} onChange={this.handleInputChange} />
    );
  }
}

export default Filter;