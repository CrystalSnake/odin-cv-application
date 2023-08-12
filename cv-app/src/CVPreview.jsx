import React from 'react';

export default function CVPreview(props) {
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
  } = props;
  return (
    <div>
      <h2 className="tw-pl-3">CV Preview</h2>
      <div className="tw-bg-gray-200 tw-drop-shadow-md tw-rounded-md">
        <div className="tw-bg-blue-500 tw-rounded-t-md preview-block">
          <p className="tw-text-xl tw-font-semibold">
            {firstName} {lastName}
          </p>
          <p className="tw-text-white">Email: {eMail}</p>
          <p className="tw-text-white">Phone Number: {phoneNumber}</p>
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
