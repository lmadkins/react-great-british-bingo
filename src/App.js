import './App.css';
import React, { useState } from 'react';
// import { Routes, Route, Link } from "react-router-dom"
import GamePage from './components/GamePage';
import Navbar from './components/Navbar';
import GameIntro from './components/GameIntro'
import winningCombos from './data/winningCombos'

function App() {
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
        <Navbar />
      </nav>
      <main>
        {/* <Routes>
            <Route path="/" element={<GameIntro />}/>
            <Route path="/play" element={<GamePage />}/>
        </Routes> */}
        <button>New Game</button>
        <table role='grid'>
          <body>
            <tr role='row' className="row1" >
              <td role='gridcell' className='cell0'>Cell 0</td>
              <td role='gridcell'className='cell1'>Cell 1</td>
              <td role='gridcell' className='cell2'>Cell 2</td>
              <td role='gridcell' className='cell3'>Cell 3</td>
              <td role='gridcell' className='cell4'>Cell 4</td>
              {/* <!--- 4 more grid cells ---> */}
            </tr>
            <tr role='row' className="row2" >
              <td role='gridcell' className='cell5'>Cell 5</td>
              <td role='gridcell' className='cell6'>Cell 6</td>
              <td role='gridcell' className='cell7'>Cell 7</td>
              <td role='gridcell' className='cell8'>Cell 8</td>
              <td role='gridcell' className='cell9'>Cell 9</td>
            </tr>
            <tr role='row' className="row3" >
            <td role='gridcell' className='cell10'>Cell 10</td>
              <td role='gridcell' className='cell11'>Cell 11</td>
              <td role='gridcell' className='cell12'>Cell 12</td>
              <td role='gridcell' className='cell13'>Cell 13</td>
              <td role='gridcell' className='cell14'>Cell 14</td>
            </tr>
            <tr role='row' className="row4" >
            <td role='gridcell' className='cell15'>Cell 15</td>
              <td role='gridcell'className='cell16'>Cell 16</td>
              <td role='gridcell' className='cell7'>Cell 17</td>
              <td role='gridcell' className='cell18'>Cell 18</td>
              <td role='gridcell' className='cell19'>Cell 19</td>
              <td role='gridcell'>...</td>
              {/* <!--- 4 more grid cells ---> */}
            </tr>
            <tr role='row' className="row5" >
              <td role='gridcell'>...</td>
              {/* <!--- 4 more grid cells ---> */}
            </tr>
            {/* <!--- 4 more rows ---> */}
          </body>
      </table>
      </main>
    </>
  );
}

export default App;
