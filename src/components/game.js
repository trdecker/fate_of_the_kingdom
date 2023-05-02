import { useState } from 'react';
import '../App.css';
import constants from '../static/constants.js';
import Tavern from './encounters/tavern.js';
import Monster from './encounters/monster.js';
import Chest from './encounters/chest.js';

function Game(props) {
    const [begin, setBegin] = useState(true);
    const [encounter, setEncounter] = useState('');

    function beginGame(){
        setBegin(false);
        getEncounter();
    }

    function getEncounter(){
        const retrievedEncounter = constants.encounters[Math.floor(Math.random() * constants.encounters.length)];
        setEncounter(retrievedEncounter);
    }

    return (
        <div class="hero bg-base-200">

            {begin && <button onClick={beginGame} class="btn btn-primary">Begin</button>}
            {!begin && encounter?.id === 'tavern' && <Tavern taverns={encounter} hero={props.hero} setHero={props.setHero}  nextEncounter={beginGame}/>}
            {!begin && encounter?.id === 'monster' && <Monster monsters={encounter} hero={props.hero} setHero={props.setHero}  nextEncounter={beginGame}/>}
            {!begin && encounter?.id === 'chest' && <Chest chests={encounter} hero={props.hero} setHero={props.setHero}  nextEncounter={beginGame}/>}

        </div>
    );
}

export default Game;
