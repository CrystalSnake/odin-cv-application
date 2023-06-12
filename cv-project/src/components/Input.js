import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, name, value, label, onChange } = this.props;
    return (
      <div>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type={type}
          name={name}
          value={value}
          placeholder={label}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Input;
