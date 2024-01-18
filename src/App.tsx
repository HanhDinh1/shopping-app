import React from 'react';
import './App.css';
import Greeter from './components/Greeter';

function App() {
  return (
    <div className="App">
      <Greeter person="Hanh" />
      <Greeter person="Victor"/>
    </div>
  );
}

export default App;
