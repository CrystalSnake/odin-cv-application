import React, { Component } from 'react';
import CVForm from './CVForm';
import CVPreview from './CVPreview';

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      eMail: '',
      phoneNumber: '',
      universityName: '',
      universityCity: '',
      degree: '',
      universityFrom: '',
      universityTo: '',
      companyName: '',
      companyCity: '',
      position: '',
      companyFrom: '',
      companyTo: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);
  }

  handleInputChange(newData) {
    this.setState(newData);
  }

  handleResetButton() {
    this.setState({
      firstName: '',
      lastName: '',
      eMail: '',
      phoneNumber: '',
      universityName: '',
      universityCity: '',
      degree: '',
      universityFrom: '',
      universityTo: '',
      companyName: '',
      companyCity: '',
      position: '',
      companyFrom: '',
      companyTo: '',
    });
    document.querySelector('form').reset();
  }

  render() {
    const {
      firstName,
      lastName,
      eMail,
      phoneNumber,
      universityName,
      universityCity,
      degree,
      universityFrom,
      universityTo,
      companyName,
      companyCity,
      position,
      companyFrom,
      companyTo,
    } = this.state;
    return (
      <div className="grid lg:grid-cols-2 gap-10 w-full max-w-screen-2xl m-auto px-10 my-5">
        <CVForm
          handleInputChange={this.handleInputChange}
          handleResetButton={this.handleResetButton}
        />

        <CVPreview
          firstName={firstName}
          lastName={lastName}
          eMail={eMail}
          phoneNumber={phoneNumber}
          universityName={universityName}
          universityCity={universityCity}
          degree={degree}
          universityFrom={universityFrom}
          universityTo={universityTo}
          companyName={companyName}
          companyCity={companyCity}
          position={position}
          companyFrom={companyFrom}
          companyTo={companyTo}
        />
      </div>
    );
  }
}

export default CV;
