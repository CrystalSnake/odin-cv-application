import { useState } from 'react';
import './App.css';
import Header from './Header';
import CV from './CV';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header title="CV Application" />
      <CV className="tw-my-5" />
      <Footer className="tw-row-end-2" />
    </>
  );
}

export default App;
