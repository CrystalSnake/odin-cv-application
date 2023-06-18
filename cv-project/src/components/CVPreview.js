import React, { Component } from 'react';

class CVPreview extends Component {
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
    } = this.props;
    return (
      <div>
        <div>
          <h3>Personal information</h3>
          <p>
            {firstName} {lastName}
          </p>
          <p>Email: {eMail}</p>
          <p>Phone Number: {phoneNumber}</p>
        </div>
        <div>
          <h3>Education</h3>
          <p>
            University name: {universityName} in {universityCity}
          </p>
          <p>
            {universityFrom}-{universityTo}
          </p>
          <p>Degree: {degree}</p>
        </div>
        <div>
          <h3>Experience</h3>
          <p>
            Company: {companyName} in {companyCity}
          </p>
          <p>Position: {position}</p>
          <p>
            {companyFrom}-{companyTo}
          </p>
        </div>
      </div>
    );
  }
}

export default CVPreview;
