import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-[#F3F2EF] h-screen"></div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-2xl">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
