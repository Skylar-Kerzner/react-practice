import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponent from './MyComponent.js';
import FormComponent from './FormComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to this React App.
        </p>
        <FormComponent></FormComponent>
        <MyComponent greeting="Thank you for your time" audience=""></MyComponent>
      </header>
    </div>
  );
}

export default App;
