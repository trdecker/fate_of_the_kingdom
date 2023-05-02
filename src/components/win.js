import '../App.css';

function Win(props) {

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
                    <h1 class="text-xl font-bold py-6">The foul king falls to his knees and with one final slash you end him.  You have finally brought peace to the land.</h1>
                    <button class="btn btn-primary" onClick={restart}>Play Again</button>
                </div>
            </div>
        </div>
    );
}

export default Win;