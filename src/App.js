import './styles/index.css'
import './styles/App.css'
import { useContext, useState } from 'react';
import { Routes, Route} from "react-router-dom"
import GamePage from './components/GamePage';
import GameIntro from './components/GameIntro'
import { InstructionsContext } from './context/InstructionsContext';
import 'animate.css'

const App = () => {
  const [openInstructions, setOpenInstructions] = useState(false)

  return (
    <>
    <InstructionsContext.Provider value={{openInstructions, setOpenInstructions}}>
      <Routes>
        <Route>
        <Route path="/" element={<GameIntro />}/>
        <Route path="/play" element={<GamePage />}/>
        </Route>
      </Routes>
    </InstructionsContext.Provider>
    </>
  );
};

export default App;