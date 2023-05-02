import { useState } from 'react';
import Run from './run.js'

function Monster(props) {
    const [encounterState, setEncounterState] = useState('discovery');
    const [encounter, setEncounter] = useState('');
    const [monsterMaxHealth, setMonsterMaxHealth] = useState(0);

    function getEncounter() {
        const retrievedEncounter = props.monsters.encounters[Math.floor(Math.random() * props.monsters.encounters.length)];
        console.log(retrievedEncounter)
        setEncounter(retrievedEncounter);
        setMonsterMaxHealth(retrievedEncounter.monsterHealth);
    }

    function handleChoice() {
        setEncounterState('fight');
    }

    function handleRun() {
        setEncounterState('run');
    }

    function handleAttack() {
        const newMonsterHealth = encounter.monsterHealth - props.hero.strength;
        encounter.monsterHealth = newMonsterHealth;
        setEncounter(encounter);
        if (newMonsterHealth <= 0) {
            props.setHero({ ...props.hero, strength: props.hero.strength - encounter.power});
            setEncounterState('outcome');
        } else {
            handleMonsterAttack();
        }
    }

    function handleMonsterAttack() {
        const newHeroHealth = props.hero.health + encounter.power;
        props.setHero({ ...props.hero, health: newHeroHealth });
        if (newHeroHealth <= 0) {
            // Handle death
        }
    }


    function handleClose() {
        setEncounterState('discovery');
        setEncounter('');
        props.nextEncounter();
    }

    return (
        <div class="hero bg-base-200">
            {encounterState === 'discovery' && <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={require(`../../images/castle.jpg`)} alt="Tavern" /></figure>
                <div class="card-body">
                    <p>You here an unhuman noise coming just uphead.</p>
                    <button onClick={() => { setEncounterState('encounter'); getEncounter() }} class="btn btn-primary">Investigate</button>
                </div>
            </div>}
            {encounterState === 'encounter' && <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={require(`../../images/${encounter.image}`)} alt="Tavern" /></figure>
                <div class="card-body">
                    <p>{props.monsters.text} {encounter.itemName}</p>
                    <button onClick={handleChoice} class="btn btn-primary">{encounter.choice}</button>
                    <button onClick={handleRun} class="btn btn-primary">Run!</button>
                </div>
            </div>}
            {encounterState === 'fight' &&
            <div>
            
                <div class="card w-96 bg-base-100 shadow-xl flex flex-row">
                    <div class="card-body">
                        <p>{encounter.itemName}</p>
                        <p>Monster Health: {encounter.monsterHealth}</p>
                        <progress class="progress progress-primary w-56" value={encounter.monsterHealth} max={monsterMaxHealth}></progress>
                    </div>
                    <div>
                        <figure><img src={require(`../../images/${encounter.image}`)} alt="Tavern" /></figure>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl flex flex-row">
                <div>
                    <figure><img src={require(`../../images/${props.hero.image}`)} alt="Tavern" /></figure>
                </div>
                <div class="card-body">
                    <p>{props.hero.name}</p>
                    <div class="flex flex-row">
                    <button onClick={handleAttack} class="btn btn-primary">Attack</button>
                    <button onClick={handleRun} class="btn btn-primary">Escape</button>
                    </div>
                </div>
            </div>
                </div>}
            {encounterState === 'run' && <div class="card w-96 bg-base-100 shadow-xl">
                <Run platformNumber={props.hero.health / (encounter.monsterHealth / 1.5)} setEncounterState={setEncounterState}/>
            </div>
            }
            {encounterState === 'escaped' && <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={require(`../../images/${encounter.image}`)} alt="Tavern" /></figure>
                <div class="card-body">
                    <p>You were able to escape the {encounter.itemName}.</p>
                    <button onClick={handleClose} class="btn btn-primary">Continue Journey</button>
                </div>
            </div>}
            {encounterState === 'outcome' && <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={require(`../../images/${encounter.image}`)} alt="Tavern" /></figure>
                <div class="card-body">
                    <p>You were able to kill the {encounter.itemName}. You've gotten stronger.</p>
                    <button onClick={handleClose} class="btn btn-primary">Continue Journey</button>
                </div>

            </div>
            }

        </div>
    );
}

export default Monster;
