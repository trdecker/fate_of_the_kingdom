import { useState } from 'react';
import Run from './run.js'

function Final(props) {
    const [encounterState, setEncounterState] = useState('discovery');
    const [encounter, setEncounter] = useState('');
    const [monsterMaxHealth, setMonsterMaxHealth] = useState(0);

    function getEncounter() {
        setEncounter(props.boss.encounters[0]);
        setMonsterMaxHealth(props.boss.encounters[0].monsterHealth);
    }

    function handleAttack() {
        const newMonsterHealth = encounter.monsterHealth - props.hero.strength;
        encounter.monsterHealth = newMonsterHealth;
        setEncounter(encounter);
        if (newMonsterHealth <= 0) {
            props.setHero({ ...props.hero, strength: props.hero.strength - encounter.power});
            props.setGameState('win')
        } else {
            handleBossAttack();
        }
    }

    function handleBossAttack() {
        const newHeroHealth = props.hero.health + encounter.power;
        props.setHero({ ...props.hero, health: newHeroHealth });
        if (newHeroHealth <= 0) {
            // Handle death
            props.setGameState('death')
        }
    }

    return (
        <div class="hero bg-base-200">
            {encounterState === 'discovery' && <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={require(`../../images/castle.jpg`)} alt="Tavern" /></figure>
                <div class="card-body">
                    <p>You've made it to the castle alive.</p>
                    <button onClick={() => { setEncounterState('encounter'); getEncounter() }} class="btn btn-primary">Investigate</button>
                </div>
            </div>}
            {encounterState === 'encounter' && <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={require(`../../images/${encounter.image}`)} alt="Tavern" /></figure>
                <div class="card-body">
                    <p>{props.boss.text}</p>
                    <button onClick={() => {setEncounterState('fight')}} class="btn btn-primary">Attack!</button>
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
                        <figure><img src={require(`../../images/${encounter.image}`)} alt="boss" /></figure>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl flex flex-row">
                <div>
                    <figure><img src={require(`../../images/${props.hero.image}`)} alt="hero" /></figure>
                </div>
                <div class="card-body">
                    <p>{props.hero.name}</p>
                    <div class="flex flex-row">
                    <button onClick={handleAttack} class="btn btn-primary">Attack</button>
                    </div>
                </div>
            </div>
                </div>}
        </div>
    );
}

export default Final;
