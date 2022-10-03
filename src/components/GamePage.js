import React, { useState, useEffect} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext'; 
import { MarkedContext } from '../context/MarkedContext';
import { WinContext } from '../context/WinContext'; 
import { RestartContext } from '../context/RestartContext';
import jsonArr from '../data/promptList';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box'
// import Paper from '@mui/material/Paper';
// import Container from '@mui/material/Container';
import GameNav from './GameNav';
import Square from './Square';
import WinAlert from "./WinAlert";

const GamePage = () => {
  const [newPrompts, setNewPrompts] = useState([])
  const [marked, setMarked] = useState()
  const [markedArr, setMarkedArr] = useState([])
  const [win, setWin] = useState(false)
  const [replay, setReplay] = useState(false)
  const [restartBoard, setRestartBoard] = useState(false)

  useEffect(() => {
    renderNewGame()
    // setWin(false)
    // console.log(restartBoard)
    // console.log(win)
  }, [restartBoard])

  let shuffledArr = []

  function shuffleSlicePrompts() {
    shuffledArr = jsonArr.sort(() => Math.random() - 0.5)
    let slicedPrompts = shuffledArr.slice(0, 25)
    setNewPrompts(slicedPrompts)
  }

  function renderNewGame() {
    shuffleSlicePrompts()
    setMarkedArr([])
    setRestartBoard(false)
    setWin(false)
  }
  
  const handleStartClick = () => {
    renderNewGame()
    // setRestartBoard(true)
    // console.log(restartBoard)
    // setRestartBoard(false)
  }

  return (
    <>
    <WinContext.Provider
      value={{win, setWin}}>
    <MarkedArrContext.Provider
      value={{markedArr, setMarkedArr}}>
    <MarkedContext.Provider
      value={{marked, setMarked}}>
    <RestartContext.Provider
      value={{restartBoard, setRestartBoard}}>

    <WinAlert 
      // handleStartClick={handleStartClick}
      />

    <GameNav 
    handleStartClick={handleStartClick}
    />
  {/* <Paper
    elevation={6}
    // square={true}
    > */}
    <div
        className='bingoCard animate__animated animate__fadeInUp'>
      {newPrompts.map((v, k) => {
        return (
        
        <Square 
        key={`${k}`} 
        squareid={k} 
        prompt={v.prompt} 
        id={v.id}
        />
      )})}    
    </div>
  {/* </Paper> */}
  </RestartContext.Provider>
  </MarkedContext.Provider> 
  </MarkedArrContext.Provider>
  </WinContext.Provider>
  </>
  );
};

export default GamePage;