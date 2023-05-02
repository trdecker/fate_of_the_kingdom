import { useState } from 'react';

function Chest(props) {
    const [encounterState, setEncounterState] = useState('discovery');
    const [encounter, setEncounter] = useState('');

    function getEncounter() {
        const retrievedEncounter = props.chests.encounters[Math.floor(Math.random() * props.chests.encounters.length)];
        console.log(retrievedEncounter)
        setEncounter(retrievedEncounter);
    }

    function handleChoice(){
        if(props.hero.strength + encounter.affectAmount < 0){
            props.setHero({...props.hero, strength: 0});
            // Handle death
        } else {
            props.setHero({...props.hero, strength: props.hero.strength + encounter.affectAmount});
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

    function handleClose(){
        setEncounterState('discovery');
        setEncounter('');
        props.nextEncounter();
    }

    return (
        <div class="hero bg-base-200">
            {encounterState === 'discovery' && <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={require(`../../images/chest.jpeg`)} alt="Hero Image" /></figure>
                <div class="card-body">
                    <p>You find what appears to be a chest</p>
                    <button onClick={() => { setEncounterState('encounter'); getEncounter() }} class="btn btn-primary">Open Chest</button>
                </div>
            </div>}
            {encounterState === 'encounter' && <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={require(`../../images/${encounter.image}`)} alt="Hero Image" /></figure>
                <div class="card-body">
                    <p>{props.chests.text} {encounter.itemName}</p>
                <button onClick={handleChoice} class="btn btn-primary">{encounter.choice}</button>
                <button onClick={handleStore} class="btn btn-primary">Store Item</button>
                <button onClick={handleClose} class="btn btn-primary">Close Chest</button>
                </div>
            </div>}
            {encounterState === 'outcome' && <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={require(`../../images/${encounter.image}`)} alt="Hero Image" /></figure>
                <div class="card-body">
                    <p>{encounter.text}</p>
                    <button onClick={handleClose} class="btn btn-primary">Close Chest</button>
                </div>

            </div>
            }

        </div>
    );
}

export default Chest;
