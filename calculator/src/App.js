import React, { useEffect } from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Calculator />
    </div>
  );
}

export default App;