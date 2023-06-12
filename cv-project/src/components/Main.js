import React, { Component } from 'react';
import CVForm from './CVForm';
import CVPreview from './CVPreview';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CVForm />
        <CVPreview />
      </div>
    );
  }
}

export default Main;
