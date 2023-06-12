import React, { Component } from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Personal />
        <Education />
        <Experience />
        <button>Reset</button>
      </div>
    );
  }
}

export default CVForm;
