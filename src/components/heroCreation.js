import { useState } from 'react';
import '../App.css';

function Hero(props) {
    const [creationStep, setCreationStep] = useState(0);
    const [heroImage, setHeroImage] = useState(''); // ['knight.jpeg', 'knight2.jpeg']
    const [heroName, setHeroName] = useState('');

    const chooseHeroImage = (image) => () => {
        setHeroImage(image);
        setCreationStep(1);
    }

    function beginGame() {
        props.setGameState('playing');
        props.setHero({ name: heroName, image: heroImage, ...props.hero });
    }

    return (
        <div class="hero min-h-screen bg-base-200">
            {creationStep === 0 && <div>
                <h2 class="text-5xl font-bold py-6">Choose your Hero</h2>
                <div class="flex flex-col w-full lg:flex-row">
                <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img class="py-6 w-60" src={require('../images/heroFull.png')} alt="knight" /></figure>
                        <div class="card-body">
                            <div class="card-actions justify-end">
                                <button onClick={chooseHeroImage('heroFull.png')} class="btn btn-primary">Choose</button>
                            </div>
                        </div>
                    </div>
                    <div class="divider lg:divider-horizontal"></div> 
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img class="py-6 w-60" src={require('../images/hero2Full.png')} alt="knight2" /></figure>
                        <div class="card-body">
                            <div class="card-actions justify-end">
                                <button onClick={chooseHeroImage('hero2Full.jpeg')} class="btn btn-primary">Choose</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {creationStep === 1 && <div class="flex flex-row">
                <input type="text" placeholder="Hero Name" onChange={(e) => setHeroName(e.target.value)} class="input input-bordered input-primary w-full max-w-xs" />
                <button onClick={beginGame} class="btn btn-primary">Choose</button>
            </div>}



        </div>
    );
}

export default Hero;
