import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, name, label, onChange } = this.props;
    return (
      <div>
        {label && <label htmlFor={name}>{label}</label>}
        <input type={type} name={name} onChange={onChange} />
      </div>
    );
  }
}

export default Input;
