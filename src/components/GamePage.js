import React, { useState, useEffect} from 'react';
import { ChallengeModeContext } from '../context/ChallengeModeContext';
import { MarkedArrContext } from '../context/MarkedArrContext'; 
import { PrintModeContext } from '../context/PrintModeContext';
import { WinContext } from '../context/WinContext'; 
import jsonArr from '../data/promptList';
import Nav from './Nav';
import Square from './Square';
import WinAlert from "./WinAlert";


const GamePage = () => {
// STATE TO PASS AS CONTEXT
  // MarkedArrContext
  const initialMarkedArrState = [12]

  const [markedArr, setMarkedArr] = useState(initialMarkedArrState)

  // ChallengeMode Context
  const [challengeMode, setChallengeMode] = useState(false)

  // WinContext
  const [win, setWin] = useState(false)

  // PrintModeContext
  const [print, setPrint] = useState(false)

// LOCAL STATE
  const [newPrompts, setNewPrompts] = useState([])

  const [restartBoard, setRestartBoard] = useState(false)


  useEffect(() => {
    renderNewGame()
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
    let slicedPrompts = shuffledArr.slice(0, 25)
    setNewPrompts(slicedPrompts)
    // ^ newPrompts then gets mapped into Squares
  }

  function renderNewGame() {
    setPrint(false)
    setWin(false)
    setMarkedArr([initialMarkedArrState])
    shuffleSlicePrompts()
  }
  
  // function to pass to GameNav component to use for shuffle button
  const handleShuffleClick = () => { 
    setRestartBoard(true)
  }

  return (
    <ChallengeModeContext.Provider value={{challengeMode, setChallengeMode}}>
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
    </ChallengeModeContext.Provider>
  );
};

export default GamePage;