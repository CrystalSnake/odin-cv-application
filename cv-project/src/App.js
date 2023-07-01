import React, { Component } from 'react';
import Header from './components/Header';
import CV from './components/CV';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App grid min-h-screen grid-rows-[min-content,auto,min-content]">
        <Header title="CV Application" />
        <CV className="my-5" />
        <Footer className="row-end-2" />
      </div>
    );
  }
}

export default App;
