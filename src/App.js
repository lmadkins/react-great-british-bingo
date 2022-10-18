// import './fonts/Futura-Book.ttf';
// import './fonts/Futura-Heavy.ttf';
import './styles/index.css'
import './styles/App.css'
import { useState } from 'react';
import { Routes, Route} from "react-router-dom"
import GamePage from './components/GamePage';
import Home from './components/Home'
import 'animate.css'

const App = () => {
  
  return (  
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />}/>
          <Route path="/play" element={<GamePage />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;