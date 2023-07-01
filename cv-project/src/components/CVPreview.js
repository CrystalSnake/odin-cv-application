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
        <h2 className="pl-3">CV Preview</h2>
        <div className="bg-gray-200 drop-shadow-md rounded-md">
          <div className="bg-blue-500 rounded-t-md preview-block">
            <p className="text-xl font-semibold">
              {firstName} {lastName}
            </p>
            <p className="text-white">Email: {eMail}</p>
            <p className="text-white">Phone Number: {phoneNumber}</p>
          </div>
          <div className="preview-block">
            <h3>Education</h3>
            <p>
              University name: {universityName} in {universityCity}
            </p>
            <p>
              {universityFrom}-{universityTo}
            </p>
            <p>Degree: {degree}</p>
          </div>
          <div className="preview-block">
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
      </div>
    );
  }
}

export default CVPreview;
