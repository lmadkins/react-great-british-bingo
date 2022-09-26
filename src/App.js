import './styles/index.css'
import './styles/App.css'
import { Routes, Route} from "react-router-dom"
import GamePage from './components/GamePage';
import GameIntro from './components/GameIntro'


const App = () => {

  return (
    <>
    <Routes>
      <Route>
      <Route path="/" element={<GameIntro />}/>
      <Route path="/play" element={<GamePage />}/>
      </Route>
    </Routes>
    </>
  );
};

export default App;