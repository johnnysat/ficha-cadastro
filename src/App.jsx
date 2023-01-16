import React from 'react';
import './App.css';
import Ficha from './components/Ficha/Ficha'
import CharDate from './components/CharDate/CharDate';
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="body__app">
      <Ficha />
      <CharDate />
      </div>
    </div>
  );
}

export default App;
