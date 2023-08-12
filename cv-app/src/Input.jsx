import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, name, label, onChange } = this.props;
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
}

export default Input;
