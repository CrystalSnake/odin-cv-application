import React, { Component } from 'react';
import Input from './Input';

class CVForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newData = { [event.target.name]: event.target.value };
    this.props.handleInputChange(newData);
  }

  render() {
    return (
      <div>
        <form>
          <div className="mb-2">
            <h3>Personal information</h3>
            <Input
              label="First name"
              type="text"
              name="firstName"
              onChange={this.handleChange}
            />
            <Input
              label="Last name"
              type="text"
              name="lastName"
              onChange={this.handleChange}
            />
            <Input
              label="E-mail"
              type="email"
              name="eMail"
              onChange={this.handleChange}
            />
            <Input
              label="Phone number"
              type="tel"
              name="phoneNumber"
              onChange={this.handleChange}
            />
            <h3>Education</h3>
            <Input
              label="University name"
              type="text"
              name="universityName"
              onChange={this.handleChange}
            />
            <Input
              label="City"
              type="text"
              name="universityCity"
              onChange={this.handleChange}
            />
            <Input
              label="Degree"
              type="text"
              name="degree"
              onChange={this.handleChange}
            />
            <div className="flex gap-3 w-40">
              <Input
                label="From"
                type="number"
                name="universityFrom"
                onChange={this.handleChange}
              />
              <Input
                label="To"
                type="number"
                name="universityTo"
                onChange={this.handleChange}
              />
            </div>
            <h3>Experience</h3>
            <Input
              label="Company"
              type="text"
              name="companyName"
              onChange={this.handleChange}
            />
            <Input
              label="City"
              type="text"
              name="companyCity"
              onChange={this.handleChange}
            />
            <Input
              label="Position"
              type="text"
              name="position"
              onChange={this.handleChange}
            />
            <div className="flex gap-3 w-40">
              <Input
                label="From"
                type="number"
                name="companyFrom"
                onChange={this.handleChange}
              />
              <Input
                label="To"
                type="number"
                name="companyTo"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button
            className="rounded-md border transition ease-in-out delay-10 bg-red-900 hover:bg-red-700 text-white px-3 py-1 py-0.5"
            onClick={() => this.props.handleResetButton()}
          >
            Reset
          </button>
        </form>
      </div>
    );
  }
}

export default CVForm;
