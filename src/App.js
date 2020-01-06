import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map } from './features/map/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Travel Manager <sup>beta</sup>
        </a>
      </header>
      <Map></Map>
    </div>
  );
}

export default App;
