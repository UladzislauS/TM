import React from 'react';
import './App.css';
import { Map } from './features/map/Map';
import { Header } from './core/header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Map></Map>
    </div>
  );
}

export default App;
