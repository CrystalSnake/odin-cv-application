import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, name, label, onChange } = this.props;
    return (
      <div className="my-1 flex flex-wrap">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          className="rounded-md border border-blue-400 px-2 py-0.5 w-full"
          type={type}
          name={name}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Input;
