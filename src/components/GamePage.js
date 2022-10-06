import React, { useState, useEffect} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext'; 
import { MarkedContext } from '../context/MarkedContext';
import { WinContext } from '../context/WinContext'; 
import { RestartContext } from '../context/RestartContext';
import jsonArr from '../data/promptList';
import GameNav from './GameNav';
import Square from './Square';
import WinAlert from "./WinAlert";

const GamePage = () => {
  const [newPrompts, setNewPrompts] = useState([])
  const [marked, setMarked] = useState()
  const [markedArr, setMarkedArr] = useState([])
  const [win, setWin] = useState(false)
  const [restartBoard, setRestartBoard] = useState(false)

  useEffect(() => {
    renderNewGame()
  }, [restartBoard])

  let shuffledArr = []

  function shuffleSlicePrompts() {
    shuffledArr = jsonArr.sort(() => Math.random() - 0.5)
    let slicedPrompts = shuffledArr.slice(0, 25)
    setNewPrompts(slicedPrompts)
  }

  function renderNewGame() {
    shuffleSlicePrompts()
    // Include 12 (squareid of "free square")
    setMarkedArr([12])
    setRestartBoard(false)
    setWin(false)
  }
  
  const handleStartClick = () => {
    renderNewGame()
  }

  return (
    <>
    <WinContext.Provider value={{win, setWin}}>
    <MarkedArrContext.Provider value={{markedArr, setMarkedArr}}>
    <MarkedContext.Provider value={{marked, setMarked}}>
    <RestartContext.Provider value={{restartBoard, setRestartBoard}}>

      <WinAlert />

      <GameNav handleStartClick={handleStartClick}/>
      
      <div
        className='bingoCard animate__animated animate__fadeInUp'>
        {newPrompts.map((v, k) => {
          return (
          <Square 
            key={`${k}`} 
            squareid={k} 
            prompt={v.prompt} 
            id={v.id}/>
        )})}    
      </div>
    </RestartContext.Provider>
    </MarkedContext.Provider> 
    </MarkedArrContext.Provider>
    </WinContext.Provider>
  </>
  );
};

export default GamePage;