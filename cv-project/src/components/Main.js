import React, { Component } from 'react';
import Personal from './Personal';
import Education from './Education';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Personal />
        <Education />
      </div>
    );
  }
}

export default Main;
