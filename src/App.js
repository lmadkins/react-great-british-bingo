import './App.css';
import React, { useState, useContext} from 'react';
import { MarkedContext } from './MarkedContext';
// import { Routes, Route, Link } from "react-router-dom"
import Square from './components/Square';
// import Navbar from './components/Navbar';
// import GameIntro from './components/GameIntro'
import jsonArr from './data/promptList.js'
// import winningCombos from'./data/winningCombos'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import App2 from './App2'

function App() {
  const intitialState = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
    33: false,
    34: false,
  }
  const [promptsArray, setPromptsArray] = useState([])
  const [marked, setMarked]= useState({    
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
    33: false,
    34: false,})
  const [restart, setRestart] = useState(false)
  const [row1, setRow1] = useState([])
  const [row2, setRow2] = useState([])

  const BingoPrompt = styled(Card)( marked ? {
    height: '15vh',
    width: '15vw',
    color: 'red', 
    fontSize: '20px', 
    border: '2px solid black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
      } : {
    height: '15vh',
    width: '15vw',
    color: 'black',
    border: '2px solid black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    })
  
  // const [row3Part1, setRow3Part1] = useState([])
  // const [row3Part2, setRow3Part2] = useState([])
  // const [row4, setRow4] = useState([])
  // const [row5, setRow5] = useState([])
  // const [sq1Marked, setSq1Marked] = useState(false)
  // const [sq2Marked, setSq2Marked] = useState(false)
  // const [sq3Marked, setSq3Marked] = useState(false)
  // const [sq4Marked, setSq4Marked] = useState(false)
  // const [sq5Marked, setSq5Marked] = useState(false) 
// PSEUDOCODE
// initial game state, all squares are marked: false

  
let row1Arr = []
let row2Arr = []
// let row3Part1Arr = []
// let row3Part2Arr = []
// let row4Arr = []
// let row5Arr = []
let shuffledArr = []
let slicedArr = []

function shuffleArr() {
  shuffledArr = jsonArr.sort(() => Math.random() - 0.5)
  slicedArr = shuffledArr.slice(0, 5)
  // console.log(slicedArr)
  return slicedArr
}


function renderNew() {
  shuffleArr()
  setPromptsArray(slicedArr)
  // row1Arr = shuffledArr.slice(0,5)
  // setRow1(row1Arr)
  // row2Arr = shuffledArr.slice(6,11)
  // setRow2(row2Arr)
  // row3Part1Arr = shuffledArr.slice(12,14)
  // setRow3Part1(row3Part1Arr)
  // row3Part2Arr = shuffledArr.slice(16,18)
  // setRow3Part2(row3Part2Arr)
  // row4Arr = shuffledArr.slice(19,24)
  // setRow4(row4Arr)
  // row5Arr = shuffledArr.slice(25,30)
  // setRow5(row5Arr)
  // setRestart(false)

}

const handleRestart = () => {
  // console.log('handleRestartClick has run')
  // console.log(shuffledArr)
  setMarked(false)
  // setRestart(true)
  // console.log(restart)
  // const id= marked({...})
  renderNew()
  // if (marked === true){
  // setMarked(intitialState)
  // }
}
const handleClick = (event) => {
  const id = event.target.id
  // console.log(marked.id)
  console.log(id)
  setMarked({id: true})
  // const newState = {...setMarked, id : true }
  // setMarked({[event.target.id]: true})
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

      <App2 />
        {/* <Routes>
            <Route path="/" element={<GameIntro />}/>
            <Route path="/play" element={<GamePage />}/>
        </Routes> */}

        {/* Game page */}
        
        <button
          onClick={handleRestart}
        >Restart Game</button>
      
        {/* <table role='grid'>
        
          <tr role='row' className="row1" > */}
            <Grid container 
            justify="center" alignItems="center" alignContent="center"
            spacing={0}>
          {promptsArray.map((prompt, i) => {
            const id = prompt.id
            // console.log(i)
            return (
              <>
              <Grid item xs={2} 
              // key={prompt.id}
              key={`${i}, ${prompt.prompt}`}
              >
                <BingoPrompt
                onClick={handleClick}
                key={`${i}, ${prompt.prompt}`}
                >{prompt.prompt}</BingoPrompt>    
            </Grid>
            </>
          )}
 
              // <MarkedContext.Provider
              // value={{marked, setMarked}}>

              // <div 
              // text={prompt.prompt} 
              // key={prompt.id}
              // id={prompt.id}
              // restart={restart}
              // setRestart={setRestart}
              // onClick={handleCellClick}
              // // className='unmarked'
              // className={!marked ? 'unmarked' : 'marked'}
              // >{prompt.prompt}</div>

              )}
              </Grid>
          {/* </tr> */}
          
          {/* <tr role='row' className="row2" >
          {row2.map((prompt) => (
            <MarkedContext.Provider
        value={{marked, setMarked}}>
              <Square 
              text={prompt.prompt} 
              key={prompt.id}
              id={prompt.id}
              restart={restart}
              setRestart={setRestart}
              // className='unmarked'
              // onClick={this.handleCellClick}
              className={restart? 'unmarked' : 'marked'}
              />
              </MarkedContext.Provider>
              ))}
          </tr> */}
          
{/* 


          <tr role='row' className="row3" >
            {row3Part1.map((prompt) => (
              <Square 
              text={prompt.prompt} 
              key={prompt.id}
              id={prompt.id}
              restart={restart}
              // className='unmarked'
              className={restart? 'unmarked' : 'marked'}
              />
              ))}

            <td role='gridcell' 
                className='free marked cell12'>FREE</td>
            
            {row3Part2.map((prompt) => (
              <Square 
              text={prompt.prompt} 
              key={prompt.id}
              id={prompt.id}
              restart={restart}
              // className='unmarked'
              // className={marked? 'marked' : 'unmarked'}
              className={restart? 'unmarked' : 'marked'}
              />
              ))}
          </tr>

          <tr role='row' className="row4" >
              {row4.map((prompt) => (
              <Square 
              text={prompt.prompt} 
              key={prompt.id}
              id={prompt.id}
              restart={restart}
              // className='unmarked'
              // className={marked? 'marked' : 'unmarked'}
              className={restart? 'unmarked' : 'marked'}
              />
              ))}
          </tr>

          <tr role='row' className="row5" >
            {row5.map((prompt) => (
              <Square 
              text={prompt.prompt} 
              key={prompt.id}
              id={prompt.id}
              restart={restart}
              // className='unmarked'
              // className={marked? 'marked' : 'unmarked'}
              className={restart? 'unmarked' : 'marked'}
              />
              ))}
          </tr> */}
        {/* </table> */}
        
      </main>
    </>
  );
};

export default App;