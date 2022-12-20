import React, { useState, useEffect} from 'react';
import { ChallengeModeContext } from '../context/ChallengeModeContext';
import { NormalModeContext } from '../context/NormalModeContext';
import { ModeContext } from '../context/ModeContext';
import { MarkedArrContext } from '../context/MarkedArrContext'; 
import { PrintModeContext } from '../context/PrintModeContext';
import { WinContext } from '../context/WinContext'; 
import jsonArr from '../data/promptList';
import Nav from './Nav';
import Square from './Square';
import WinAlert from "./WinAlert";


const GamePage = () => {
  // Normal & ChallengeMode Context
  const [challengeMode, setChallengeMode] = useState(false)
  const [normalMode, setNormalMode] = useState(true)
  const [mode, setMode] = useState('normal')

// STATE TO PASS AS CONTEXT
  // MarkedArrContext
  const initialMarkedArrState = !challengeMode ? [4] : [12]

  const [markedArr, setMarkedArr] = useState(initialMarkedArrState)
  
  // WinContext
  const [win, setWin] = useState(false)

  // PrintModeContext
  const [print, setPrint] = useState(false)

// LOCAL STATE
  const [newPrompts, setNewPrompts] = useState([])

  const [restartBoard, setRestartBoard] = useState(false)


  useEffect(() => {
    renderNewGame()
//     console.log('normal mode is on? ' + normalMode)
//     console.log('challenge mode is on? ' 
// + challengeMode)
  }, [])
  // ^ renders new game on load

  useEffect(() => {
    renderNewGame()
    setRestartBoard(false)

  }, [restartBoard])
  // ^renders new game when shuffle button is pressed

  function shuffleSlicePrompts() {
    let shuffledArr = []
    shuffledArr = jsonArr.sort(() => Math.random() - 0.5)
    let slicedPrompts = 
    !challengeMode ? shuffledArr.slice(0, 9) : shuffledArr.slice(0, 25) 
    setNewPrompts(slicedPrompts)
    // ^ newPrompts then gets mapped into Squares
  }

  function renderNewGame() {
    setPrint(false)
    setWin(false)
    setMarkedArr(initialMarkedArrState)
    shuffleSlicePrompts()
  }
  
  // function to pass to GameNav component to use for shuffle button
  const handleShuffleClick = () => { 
    setRestartBoard(true)
  }

  return (
    <ModeContext.Provider value={{mode, setMode}}>
    <ChallengeModeContext.Provider value={{challengeMode, setChallengeMode}}>
    <NormalModeContext.Provider value={{normalMode, setNormalMode}}>
    <WinContext.Provider value={{win, setWin}}>
    <MarkedArrContext.Provider value={{markedArr, setMarkedArr}}>
    <PrintModeContext.Provider value={{print, setPrint}}>
    <>
      <WinAlert 
      renderNewGame={renderNewGame}/>
      
      <Nav 
      handleShuffleClick={handleShuffleClick} />
    
      <div className='bingoCard 
        animate__animated animate__fadeInUp'>
          {newPrompts.map((v, k) => {
            return (
            <Square 
              key={`${k}`} 
              squareid={k} 
              prompt={v.prompt} 
              id={v.id}/>
          )})}    
      </div>
    </>
    
    </PrintModeContext.Provider>
    </MarkedArrContext.Provider>
    </WinContext.Provider>
    </NormalModeContext.Provider>
    </ChallengeModeContext.Provider>
    </ModeContext.Provider>
  );
};

export default GamePage;