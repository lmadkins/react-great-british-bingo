import './App.css';
import React, { useState, useContext} from 'react';
import { MarkedArrContext } from './context/MarkedArrContext';
import { MarkedContext } from './context/MarkedContext';
// import { Routes, Route, Link } from "react-router-dom"
// import Square from './components/Square';
// import Navbar from './components/Navbar';
// import GameIntro from './components/GameIntro'
import jsonArr from './data/promptList.js'
// import winningCombos from'./data/winningCombos'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Square from './components/Square copy';

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
    setMarked(false)
    setMarkedArr([])
  }
  
  const handleRestartClick = () => {
    renderNewGame()
  }

  const handleCellClick = (event) => {
    const id = event.target.id
    console.log(id)
    // markedArr.push(event.target.id)
    console.log(markedArr)
  }

  return (
    <>
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
              key={`${k}${v.prompt}`}  
              prompt={v.prompt}  id={v.id} onClick={handleCellClick}
          />)
        })}     
      </Grid>    
    </MarkedContext.Provider> 
    </MarkedArrContext.Provider>
    </>
  );
};

export default App2;