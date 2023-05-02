import { useState } from 'react';
import '../App.css';
import constants from '../static/constants.js';
import Tavern from './encounters/tavern.js';
import Monster from './encounters/monster.js';
import Chest from './encounters/chest.js';
import Final from './encounters/final.js';

function Game(props) {
    const [begin, setBegin] = useState(true);
    const [encounter, setEncounter] = useState('');
    const [counter, setCounter] = useState(0);

    function beginGame(){
        setBegin(false);
        getEncounter();
        setCounter(counter + 1);
    }

    function getEncounter(){
        if(counter < 15){
        const retrievedEncounter = constants.encounters[Math.floor(Math.random() * constants.encounters.length)];
        setEncounter(retrievedEncounter);
        } else {
            setEncounter(constants.finalEncounter);
        }

    }

    return (
        <div class="hero bg-base-200 m-auto">

            {begin && <button onClick={beginGame} class="btn btn-primary">Begin the Adventure</button>}
            {!begin && encounter?.id === 'tavern' && <Tavern taverns={encounter} hero={props.hero} setHero={props.setHero}  nextEncounter={beginGame} setGameState={props.setGameState}/>}
            {!begin && encounter?.id === 'monster' && <Monster monsters={encounter} hero={props.hero} setHero={props.setHero}  nextEncounter={beginGame} setGameState={props.setGameState}/>}
            {!begin && encounter?.id === 'chest' && <Chest chests={encounter} hero={props.hero} setHero={props.setHero}  nextEncounter={beginGame} setGameState={props.setGameState}/>}
            {!begin && encounter?.id === 'final' && <Final boss={encounter} hero={props.hero} setHero={props.setHero} setGameState={props.setGameState}/>}
        </div>
    );
}

export default Game;
