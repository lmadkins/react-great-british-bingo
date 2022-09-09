import './App.css';
import React, { useState } from 'react';
import GamePage from './components/GamePage';
import Navbar from './components/Navbar';
import GameIntro from './components/GameIntro'

function App() {
  const [gameOn, setGameOn] = useState(false)
  return (
  <>
       {gameOn ? (
      <GameIntro />
      ) : (
      <GamePage />
      )
      } </>
  );
}

export default App;
