import { useState } from 'react';
import './App.css';
import Start from './components/start';

function App() {
  const [gameState, setGameState] = useState("start");

  return (
    <body>
      <header>
        <div id="navbar">
          <div>
            <a href="index.html"><h1>Fate of the Kingdom</h1></a>
          </div>
          <div>
            <a href="index.html">Play</a>
            <a href="story.html">Story</a>
            <a href="objective.html">Objective</a>
            <a href="conquerors.html">Conquerors</a>
          </div>
        </div>

      </header>
      <main>
        <div id="main-display">
          <div id="stats"></div>
          <div id="game-controls">
            <div id="visual">
              <img src="images/castle.jpeg" alt="castle" />
            </div>

            {gameState === 'start' && <Start setGameState={setGameState} />}
            {/* {gameState === 'playing' && <Playing setGameState={setGameState} /> */}
              
              </div>
              <div id="save"></div>
            </div>
    </main>
        </body>
        );
}

        export default App;
