import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="bg-gray-100 py-4">
        <h1 className="text-4xl font-bold text-green-500">
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Header;
