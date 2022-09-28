import React, { useState, useEffect, useContext} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext'; 
import { MarkedContext } from '../context/MarkedContext';
import { WinContext } from '../context/WinContext'; 
import jsonArr from '../data/promptList';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Square from './Square';
import WinAlert from "./WinAlert";

const GamePage = () => {
  const [newPrompts, setNewPrompts] = useState([])
  const [marked, setMarked] = useState()
  const [markedArr, setMarkedArr] = useState([])
  const [win, setWin] = useState(false)
  const [replay, setReplay] = useState(false)

  useEffect(() => {
    renderNewGame()
  }, [replay])

  let shuffledArr = []

  function shuffleSlicePrompts() {
    shuffledArr = jsonArr.sort(() => Math.random() - 0.5)
    let slicedPrompts = shuffledArr.slice(0, 25)
    setNewPrompts(slicedPrompts)
  }

  function renderNewGame() {
    shuffleSlicePrompts()
    setMarkedArr([])
  }
  
  const handleStartClick = () => {
    renderNewGame()
  }

  return (
    <>
    <WinContext.Provider
      value={{win, setWin}}>
    <MarkedArrContext.Provider
      value={{markedArr, setMarkedArr}}>
    <MarkedContext.Provider
      value={{marked, setMarked}}>

    <WinAlert 
      handleStartClick={handleStartClick}
      replay={replay}/>

    <Button 
      variant="contained" 
      onClick={handleStartClick}  >Restart</Button>
   {/* <Grid container spacing={3}> */}
  {/* <button> */}
  <Paper
    elevation={6}
    // square={true}
    >
    <div
        className="bingoCard">
      {newPrompts.map((v, k) => {
        return (
        
        <Square 
        key={`${k}`} 
        squareid={k} 
        prompt={v.prompt} 
        id={v.id}
          // className="bingoSquare"
        />
      )})}    
    </div>
  </Paper>
          {/* </button>    */}
    {/* </Grid> */}

  </MarkedContext.Provider> 
  </MarkedArrContext.Provider>
  </WinContext.Provider>
  </>
  );
};

export default GamePage;