import { useState } from 'react';
import './App.css';
import Start from './components/start';
import HeroCreation from './components/heroCreation';
import Game from './components/game';

function App() {
  const baseHealth = 9;
  const baseStrength = 1;
  const [gameState, setGameState] = useState("start");
  const [hero, setHero] = useState({
    strength: baseStrength,
    health: baseHealth + baseStrength,
    storage: [
      { name: 'a potion', type: 'health', amount: 5 },
    ]
  }); // { name: '', image: '' }

  return (
    <div>
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content hero min-h-screen bg-base-200">
          <div class="flex flex-wrap ">
            {hero?.image && <div class="card w-96 bg-base-100 shadow-xl">
              <figure><img src={require(`./images/${hero.image}`)} alt="Hero Image" /></figure>
              <div class="card-body">
                <h2 class="card-title">{hero.name}</h2>
                <p>Health: {hero.health}</p>
                <p>Strength: {hero.strength}</p>
                <label for="my-drawer" class="btn btn-primary drawer-button">Open Inventory</label>
              </div>
            </div>}
            <div class="divider lg:divider-horizontal"></div> 
            <div>
              {gameState === "start" && <Start setGameState={setGameState} />}
              {gameState === "hero-creation" && <HeroCreation setGameState={setGameState} hero={hero} setHero={setHero} />}
              {gameState === "playing" && <Game hero={hero} setHero={setHero}/>}
            </div>
          </div>


        </div>
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 bg-base-100 text-base-content">
            {hero.storage.map((item) => <li><a>{item.name}</a></li>)}

          </ul>
        </div>
      </div>


    </div>
  );
}

export default App;
