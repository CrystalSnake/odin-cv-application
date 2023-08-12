import React, { useState } from 'react';
import CVForm from './CVForm';
import CVPreview from './CVPreview';

const INITIAL_STATE = {
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

export default function CV() {
  const [state, setState] = useState(INITIAL_STATE);

  const handleInputChange = (newData) => {
    setState((prevState) => ({ ...prevState, ...newData }));
  };

  const handleResetButton = () => {
    setState(INITIAL_STATE);
    document.querySelector('form').reset();
  };

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
  } = state;
  return (
    <div className="tw-grid lg:tw-grid-cols-2 tw-gap-10 tw-w-full tw-max-w-screen-2xl tw-m-auto tw-px-10 tw-my-5">
      <CVForm
        handleInputChange={handleInputChange}
        handleResetButton={handleResetButton}
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
