import React from 'react';
import './App.css';
import Header from './Header.js';
import SwipeButtons from './SwipeButtons';
import TinderCards from "./TinderCards.js"

function App() {
  return (
    <div className="app">
      <Header/> 
      <TinderCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
