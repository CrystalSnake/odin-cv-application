import React, { Component } from 'react';
import Input from './Input';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Education</h3>
        <Input label="University name" type="text" />
        <Input label="City" type="text" />
        <Input label="Degree" type="text" />
        <Input label="From" type="number" />
        <Input label="To" type="number" />
        <button>Add</button>
      </div>
    );
  }
}

export default Education;
