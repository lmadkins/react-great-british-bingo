import './App.css';
import React, { useState, useEffect, useContext} from 'react';
import { MarkedArrContext } from './context/MarkedArrContext';
import { MarkedContext } from './context/MarkedContext';
// import checkWin from './functions/checkWin';
// import { Routes, Route, Link } from "react-router-dom"
// import Square from './components/Square';
// import Navbar from './components/Navbar';
// import GameIntro from './components/GameIntro'
import jsonArr from './data/promptList.js'
import winningCombos from'./data/winningCombos'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Square from './components/Square';

const App2 = () => {
 
  const [newPrompts, setNewPrompts] = useState([])
  const [marked, setMarked] = useState()
  const [markedArr, setMarkedArr] = useState([])

  let shuffledArr = []

  function shuffleSlicePrompts() {
    shuffledArr = jsonArr.sort(() => Math.random() - 0.5)
    let slicedPrompts = shuffledArr.slice(0, 25)
    setNewPrompts(slicedPrompts)
    // return newPrompts
  }

  function renderNewGame() {
    shuffleSlicePrompts()
    // setMarked(false)
    setMarkedArr([])
  }
  
  const handleRestartClick = () => {
    renderNewGame()
    // setMarked(false)
  }

  

  return (
    <>
    <nav>
        {/* <Navbar /> */}
      </nav>
        {/* Game intro page */}
      <div>
        <h1>Welcome to the Great British Bakeoff Bingo</h1>
        <p><strong>How to Play:</strong>
        <br></br>
          While watching, keep an eye out for when something happens matching one of your card prompts. When it does, click or tap to mark it off. When you get 3 in a row (horizontally or vertically), you win! </p>
          <button>
          Ready?
          On your mark, get set, PLAY!</button>
      </div>  
    <MarkedArrContext.Provider
        value={{markedArr, setMarkedArr}}>
    <MarkedContext.Provider
        value={{marked, setMarked}}>
      
      <button
      onClick={handleRestartClick}>Restart</button>
    
      <Grid container 
      justify="center" 
      alignItems="center" 
      alignContent="center"
      spacing={0}>
        {newPrompts.map((v, k) => {
          return (
            <Square 
              key={`${k}`} 
              squareid={k} 
              prompt={v.prompt} 
              id={v.id}
              // checkBingo={checkBingo}
          />)
        })}     
      </Grid>    
    </MarkedContext.Provider> 
    </MarkedArrContext.Provider>
    </>
  );
};

export default App2;