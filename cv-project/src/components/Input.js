import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type}></input>
      </div>
    );
  }
}

export default Input;
