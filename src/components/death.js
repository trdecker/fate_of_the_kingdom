import '../App.css';

function Death(props) {

    function restart(){
        props.setGameState('start');
        props.setHero({
            strength: 3,
            health: 15,
            storage: [
              { name: 'a potion', type: 'health', amount: 5 },
            ]
          });
    }
    return (
        <div class="hero bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <h1 class="text-5xl font-bold py-6">You Died</h1>
                    <p className='py6'>{props.deathMessage}</p>
                    <button class="btn btn-primary" onClick={restart}>Play Again</button>
                </div>
            </div>
        </div>
    );
}

export default Death;