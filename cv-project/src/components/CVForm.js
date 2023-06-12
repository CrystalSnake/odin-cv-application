import React, { Component } from 'react';
import Input from './Input';

class CVForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      inputValue: value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Personal information</h3>
          <Input
            label="First name"
            type="text"
            value={this.state.inputValue}
            placeholder="Enter value"
            onChange={this.handleInputChange}
          />
          <Input label="Last name" type="text" />
          <Input label="E-mail" type="email" />
          <Input label="Phone number" type="phone" />
        </div>
        <div>
          <h3>Education</h3>
          <Input label="University name" type="text" />
          <Input label="City" type="text" />
          <Input label="Degree" type="text" />
          <Input label="From" type="number" />
          <Input label="To" type="number" />
          <button>Add</button>
        </div>
        <div>
          <h3>Experience</h3>
          <Input label="Company" type="text" />
          <Input label="City" type="text" />
          <Input label="Position" type="text" />
          <Input label="From" type="number" />
          <Input label="To" type="number" />
          <button>Add</button>
        </div>
        <button>Reset</button>
      </div>
    );
  }
}

export default CVForm;
