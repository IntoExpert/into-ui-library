import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InputField } from './components/form/input/field/field';

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <body>
        <InputField id="test" label='Motasem' errorMessage='Error' />
      </body>
    </div>
  );
}

export default App;
