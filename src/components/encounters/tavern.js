import { useState } from 'react';

function Tavern(props) {
    const [encounterState, setEncounterState] = useState('discovery');
    const [encounter, setEncounter] = useState('');

    function getEncounter() {
        const retrievedEncounter = props.taverns.encounters[Math.floor(Math.random() * props.taverns.encounters.length)];
        console.log(retrievedEncounter)
        setEncounter(retrievedEncounter);
    }

    function handleChoice(){
        if(props.hero.health + encounter.affectAmount < 0){
            props.setHero({...props.hero, health: 0});
            // Handle death
            props.setGameState('death')
        } else {
            props.setHero({...props.hero, health: props.hero.health + encounter.affectAmount});
            setEncounterState('outcome');
        }

    }

    function handleStore(){
        const storedItem = {
            name: encounter.itemName,
            type: encounter.affects,
            amount: encounter.affectAmount,
            text: encounter.text
        }
        props.setHero({...props.hero, storage: [...props.hero.storage, storedItem] });
        setEncounter({...encounter, text: `You stored ${encounter.itemName} in your storage.`});
        setEncounterState('outcome');
    }

    function handleLeaveItem(){
        setEncounter({...encounter, text: `You left ${encounter.itemName} in the tavern.`});
        setEncounterState('outcome');
    }

    function handleClose(){
        setEncounterState('discovery');
        setEncounter('');
        props.nextEncounter();
    }

    return (
        <div class="hero bg-base-200">
            {encounterState === 'discovery' && <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={require(`../../images/tavern.jpeg`)} alt="Tavern" /></figure>
                <div class="card-body">
                    <p>You stumble upon what appears to be an abandoned tavern</p>
                    <button onClick={() => { setEncounterState('encounter'); getEncounter() }} class="btn btn-primary">Enter Tavern</button>
                </div>
            </div>}
            {encounterState === 'encounter' && <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={require(`../../images/${encounter.image}`)} alt="Tavern" /></figure>
                <div class="card-body">
                    <p>{props.taverns.text} {encounter.itemName}</p>
                <button onClick={handleChoice} class="btn btn-primary">{encounter.choice}</button>
                <button onClick={handleStore} class="btn btn-primary">Store Item</button>
                <button onClick={handleLeaveItem} class="btn btn-primary">Leave It</button>
                </div>
            </div>}
            {encounterState === 'outcome' && <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={require(`../../images/${encounter.image}`)} alt="Tavern" /></figure>
                <div class="card-body">
                    <p>{encounter.text}</p>
                    <button onClick={handleClose} class="btn btn-primary">Leave Tavern</button>
                </div>

            </div>
            }

        </div>
    );
}

export default Tavern;
