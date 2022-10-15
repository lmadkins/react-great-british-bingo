import React, { useState, useEffect} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext'; 
import { MarkedContext } from '../context/MarkedContext';
import { PrintModeContext } from '../context/PrintModeContext';
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
  const [print, setPrint] = useState(false)

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
    setPrint(false)
    shuffleSlicePrompts()
    // Include 12 (squareid of "free square")
    setMarked(false)
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
    <PrintModeContext.Provider value={{print, setPrint}}>
      <WinAlert />

      {!print &&
        <GameNav handleStartClick={handleStartClick}
      // handlePrintClick={handlePrintClick}
      />}
      
      <div
        className='bingoCard animate__animated animate__fadeInUp'
        style={{
          height: print ? '95vh' : '',
          boxShadow: print ? '' : 'rgba(0, 0, 0, 0.3) 0px 17px 30px'
        }}
        >
        {newPrompts.map((v, k) => {
          return (
          <Square 
            key={`${k}`} 
            squareid={k} 
            prompt={v.prompt} 
            id={v.id}/>
        )})}    
      </div>
    </PrintModeContext.Provider>
    </RestartContext.Provider>
    </MarkedContext.Provider> 
    </MarkedArrContext.Provider>
    </WinContext.Provider>
  </>
  );
};

export default GamePage;