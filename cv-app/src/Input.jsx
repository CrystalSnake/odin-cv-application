import React from 'react';

export default function Input(props) {
  const { type, name, label, onChange } = props;
  return (
    <div className="tw-my-1 tw-flex tw-flex-wrap">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className="tw-rounded-md tw-border tw-border-blue-400 tw-px-2 tw-py-0.5 tw-w-full"
        type={type}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
