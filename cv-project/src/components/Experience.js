import React, { Component } from 'react';
import Input from './Input';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Experience</h3>
        <Input label="Company" type="text" />
        <Input label="City" type="text" />
        <Input label="Position" type="text" />
        <Input label="From" type="number" />
        <Input label="To" type="number" />
        <button>Add</button>
      </div>
    );
  }
}

export default Experience;
