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
      <div>
        <CVForm
          handleInputChange={this.handleInputChange}
          handleResetButton={this.handleResetButton}
        />
        <h2>CV Preview</h2>
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
