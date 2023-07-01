import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="max-h-20 bg-gray-300 drop-shadow-md">
        <div className="m-auto max-w-screen-2xl w-full flex items-center justify-start ">
          <h1 className="text-blue-500 py-4 px-10">{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

export default Header;
