import '../App.css';

function Start(props) {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={require('../images/castle.jpg')} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold py-6">Welcome to the Kingdom</h1>

                    <button class="btn btn-primary" onClick={() => props.setGameState('hero-creation')}>Begin Journey</button>
                </div>
            </div>
        </div>
    );
}

export default Start;
