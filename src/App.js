import { useState } from 'react';
import './App.css';
import Start from './components/start';
import HeroCreation from './components/heroCreation';

function App() {
  const [gameState, setGameState] = useState("start");
  const [hero, setHero] = useState({}); // { name: '', image: '' }

  return (
    <div>
      {gameState === "start" && <Start setGameState={setGameState} />}
      {gameState === "hero-creation" && <HeroCreation setGameState={setGameState} setHero={setHero}/>}
    </div>);
}

export default App;
