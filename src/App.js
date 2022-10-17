import './styles/index.css'
import './styles/App.css'
import { useState } from 'react';
import { Routes, Route} from "react-router-dom"
import GamePage from './components/GamePage';
import Home from './components/Home'
import { InstructionsContext } from './context/InstructionsContext';
import 'animate.css'

const App = () => {
// STATE TO PASS AS CONTEXT
  // InstructionsContext
  const [openInstructions, setOpenInstructions] = useState(false)

  return (  
    <>
    <InstructionsContext.Provider value={{openInstructions, setOpenInstructions}}>
      <Routes>
        <Route>
          <Route path="/" element={<Home />}/>
          <Route path="/play" element={<GamePage />}/>
        </Route>
      </Routes>
    </InstructionsContext.Provider>
    </>
  );
};

export default App;