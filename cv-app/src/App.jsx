import { useState } from 'react';
import Header from './Header';
import CV from './CV';
import Footer from './Footer';

function App() {
  return (
    <div className="App tw-grid tw-min-h-screen tw-grid-rows-[min-content,auto,min-content]">
      <Header title="CV Application" />
      <CV className="tw-my-5" />
      <Footer className="tw-row-end-2" />
    </div>
  );
}

export default App;
