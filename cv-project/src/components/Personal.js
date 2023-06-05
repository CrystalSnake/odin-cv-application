import React, { Component } from 'react';
import Input from './Input';

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Personal information</h3>
        <Input label="First name" type="text" />
        <Input label="Last name" type="text" />
        <Input label="E-mail" type="email" />
        <Input label="Phone number" type="phone" />
      </div>
    );
  }
}

export default Personal;
