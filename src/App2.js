import './App.css';
import React, { useState, useContext} from 'react';
import { MarkedContext } from './MarkedContext';
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
    let slicedPrompts = shuffledArr.slice(0, 5)
    setNewPrompts(slicedPrompts)
    // return newPrompts
  }

  function renderNewGame() {
    shuffleSlicePrompts()
  }
  
  const handleRestartClick = () => {
    setMarked(false)
    renderNewGame()
  }

  const handleCellClick = (event) => {
    const id = event.target.id
    console.log(id)
    // markedArr.push(event.target.id)
    // console.log(markedArr)
  }

  return (
    <>
    <button
    onClick={handleRestartClick}
  >Restart</button>
    
    <Grid container 
      justify="center" alignItems="center" alignContent="center"
      spacing={0}>
        {newPrompts.map((v, k) => {
          const id= prompt.id
          return (
          //   <BingoPrompt key={`${k}${v.id}`}  id={v.id} onClick={handleCellClick}>
          //   <Square key={`${k}${v.prompt}`}  prompt={v.prompt}  id={v.id}
          //   />
          // </BingoPrompt>
          
          <Square key={`${k}${v.prompt}`}  prompt={v.prompt}  id={v.id} onClick={handleCellClick}
      
          />
          )
        })}    
    </Grid>     
    </>
  );
};

export default App2;