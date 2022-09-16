import './App.css';
import React, { useState} from 'react';
// import { Routes, Route, Link } from "react-router-dom"
import Square from './components/Square';
// import Navbar from './components/Navbar';
// import GameIntro from './components/GameIntro'
import jsonArr from './data/promptList.js'
// import winningCombos from'./data/winningCombos'

function App() {

  const [marked, setMarked] = useState(false)
  // const [restart, setRestart] = useState()
  const [row1, setRow1] = useState([])
  const [row2, setRow2] = useState([])
  const [row3Part1, setRow3Part1] = useState([])
  const [row3Part2, setRow3Part2] = useState([])
  const [row4, setRow4] = useState([])
  const [row5, setRow5] = useState([])
// PSEUDOCODE
// initial game state, all squares are marked: false

  
let row1Arr = []
let row2Arr = []
let row3Part1Arr = []
let row3Part2Arr = []
let row4Arr = []
let row5Arr = []
let shuffledArr = []

function shuffleArr() {
  shuffledArr = jsonArr.sort(() => Math.random() - 0.5)
  // return shuffledArr
}

function renderNew() {
  shuffleArr()
  row1Arr = shuffledArr.slice(0,5)
  setRow1(row1Arr)
  row2Arr = shuffledArr.slice(6,11)
  setRow2(row2Arr)
  row3Part1Arr = shuffledArr.slice(12,14)
  setRow3Part1(row3Part1Arr)
  row3Part2Arr = shuffledArr.slice(16,18)
  setRow3Part2(row3Part2Arr)
  row4Arr = shuffledArr.slice(19,24)
  setRow4(row4Arr)
  row5Arr = shuffledArr.slice(25,29)
  setRow5(row5Arr)
}

const handleRestartClick = () => {
  // console.log('handleRestartClick has run')
  // console.log(shuffledArr)
  renderNew()
}
const handleCellClick = (event) => {
  const promptText = event.target
  console.log('Clicked!')
  console.log(promptText)
  // setMarked(true)
  // console.log(marked)
}

// restart game:
// clear previous round:
    // clear prompts from squares (except for square 13/free)
    // set marked state to initial state
    // make sure state of squares is all back to 'unmarked'
  // call new game function(s) to shuffle, pick first 25, and re-render

// toggling/marking
  // handle click, to toggle state to 'marked' state
    // only set it to mark if it is unmarked? 
      // maybe undo as a stretch?
  // trigger checkwin with each click (/useeffect)

// check win
  // after a square is clicked, run it 
  // run function verifying if square id combos are all marked
// check combos with that function
    
  return (
    <>
      <nav>
        {/* <Navbar /> */}
      </nav>
      <main>
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
        {/* <Routes>
            <Route path="/" element={<GameIntro />}/>
            <Route path="/play" element={<GamePage />}/>
        </Routes> */}

        {/* Game page */}
        <button
          onClick={handleRestartClick}
        >Restart Game</button>
      
        <table role='grid'>
          <tr role='row' className="row1" >
            {row1.map((prompt) => (
              <Square 
              text={prompt.prompt} 
              key={prompt.id}
              handleCellClick={handleCellClick}
              />
              ))}
          </tr>

            {/* // <td role='gridcell' text={prompt.prompt} key={prompt.id}
            // onClick={handleCellClick}
            // >{prompt.prompt}</td> */}
            
      

          <tr role='row' className="row2" >
            {row2.map(prompt => {return <td role='gridcell' text={prompt.prompt} key={prompt.id}>{prompt.prompt}</td> })}
          </tr>

          <tr role='row' className="row3" >
            {row3Part1.map(prompt => {return <td role='gridcell' text={prompt.prompt} key={prompt.id}>{prompt.prompt}</td> })}

            <td role='gridcell' className='free cell12'>FREE</td>
            
            {row3Part2.map(prompt => {return <td role='gridcell' text={prompt.prompt} key={prompt.id}>{prompt.prompt}</td> })}
          </tr>

          <tr role='row' className="row4" >
              {row4.map(prompt => {return <td role='gridcell' text={prompt.prompt} key={prompt.id}>{prompt.prompt}</td> })}
          </tr>

          <tr role='row' className="row5" >
            {row5.map(prompt => {return <td role='gridcell' text={prompt.prompt} key={prompt.id}>{prompt.prompt}</td> })}
          </tr>
        </table>
      </main>
    </>
  );
};

export default App;