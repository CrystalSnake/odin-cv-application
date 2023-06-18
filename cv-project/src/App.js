import React, { Component } from 'react';
import Header from './components/Header';
import CV from './components/CV';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="CV Application" />
        <CV />
        <Footer />
      </div>
    );
  }
}

export default App;
