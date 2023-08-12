import React from 'react';
import Input from './Input';

export default function CVForm(props) {
  const handleChange = (event) => {
    const newData = { [event.target.name]: event.target.value };
    props.handleInputChange(newData);
  };

  return (
    <div>
      <form>
        <div className="tw-mb-2">
          <h3>Personal information</h3>
          <Input
            label="First name"
            type="text"
            name="firstName"
            onChange={handleChange}
          />
          <Input
            label="Last name"
            type="text"
            name="lastName"
            onChange={handleChange}
          />
          <Input
            label="E-mail"
            type="email"
            name="eMail"
            onChange={handleChange}
          />
          <Input
            label="Phone number"
            type="tel"
            name="phoneNumber"
            onChange={handleChange}
          />
          <h3>Education</h3>
          <Input
            label="University name"
            type="text"
            name="universityName"
            onChange={handleChange}
          />
          <Input
            label="City"
            type="text"
            name="universityCity"
            onChange={handleChange}
          />
          <Input
            label="Degree"
            type="text"
            name="degree"
            onChange={handleChange}
          />
          <div className="tw-flex tw-gap-3 tw-w-40">
            <Input
              label="From"
              type="number"
              name="universityFrom"
              onChange={handleChange}
            />
            <Input
              label="To"
              type="number"
              name="universityTo"
              onChange={handleChange}
            />
          </div>
          <h3>Experience</h3>
          <Input
            label="Company"
            type="text"
            name="companyName"
            onChange={handleChange}
          />
          <Input
            label="City"
            type="text"
            name="companyCity"
            onChange={handleChange}
          />
          <Input
            label="Position"
            type="text"
            name="position"
            onChange={handleChange}
          />
          <div className="tw-flex tw-gap-3 tw-w-40">
            <Input
              label="From"
              type="number"
              name="companyFrom"
              onChange={handleChange}
            />
            <Input
              label="To"
              type="number"
              name="companyTo"
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="tw-rounded-md tw-border tw-transition tw-ease-in-out delay-10 tw-bg-red-900 tw-hover:bg-red-700 tw-text-white tw-px-3 tw-py-0.5"
          onClick={() => props.handleResetButton()}
        >
          Reset
        </button>
      </form>
    </div>
  );
}
