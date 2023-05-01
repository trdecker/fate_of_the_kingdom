import '../App.css';

function Start(props) {
    return (
        <div>
            <h2>Welcome to the Kingdom</h2>
            <div>
                <button onClick={() => props.setGameState('playing')}>Begin Journey</button>
            </div>
        </div>
    );
}

export default Start;
