import './App.css';
// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Link } from "react-router-dom"
// import GamePage from './components/GamePage';
// import Navbar from './components/Navbar';
// import GameIntro from './components/GameIntro'
import jsonArr from './data/promptList.js'
// import winningCombos from'./data/winningCombos'

function App() {

  // const [restart, setRestart] = useState()

// PSEUDOCODE
// initial game state, all squares are marked: false
// 
// new game: 
// handle click/useeffect? state?
  // import square options from json to an array
  // function to shuffle array those square options
  // extract first 25 from that new shuffled array
  // render/map grid squares w/ those prompts (0-24)
    // exclude middle 'free' square (square 13)
  
let row1 = []
let row2 = []
let row3 = []
let row4 = []
let row5 = []
let shuffledArr = []

function shuffleArr() {
  shuffledArr = jsonArr.sort(() => Math.random() - 0.5)
}

function renderNew() {
  shuffleArr()
  let row1 = shuffledArr.slice(0,5)
  // console.log(row1)
  // console.log('renderClick has run')
  // return shuffledArr
}

const handleRestartClick = () => {
  // console.log('handleRestartClick has run')
  renderNew()
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
            {jsonArr.slice(0,5).map(prompt => {return <td role='gridcell' text={prompt.prompt} key={prompt.id}>{prompt.prompt}</td> })}
          </tr>

          <tr role='row' className="row2" >
            {jsonArr.slice(6,11).map(prompt => {return <td role='gridcell' text={prompt.prompt} key={prompt.id}>{prompt.prompt}</td> })}
          </tr>

          <tr role='row' className="row3" >
            {jsonArr.slice(12,14).map(prompt => {return <td role='gridcell' text={prompt.prompt} key={prompt.id}>{prompt.prompt}</td> })}

            <td role='gridcell' className='free cell12'>FREE</td>
            
            {jsonArr.slice(15,17).map(prompt => {return <td role='gridcell' text={prompt.prompt} key={prompt.id}>{prompt.prompt}</td> })}
          </tr>

          <tr role='row' className="row4" >
              {jsonArr.slice(18,23).map(prompt => {return <td role='gridcell' text={prompt.prompt} key={prompt.id}>{prompt.prompt}</td> })}
          </tr>

          <tr role='row' className="row5" >
            {jsonArr.slice(24,29).map(prompt => {return <td role='gridcell' text={prompt.prompt} key={prompt.id}>{prompt.prompt}</td> })}
          </tr>
        </table>
      </main>
    </>
  );
};

export default App;