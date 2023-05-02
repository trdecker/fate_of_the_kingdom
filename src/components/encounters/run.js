import React, { useEffect, useRef } from 'react';

function Run(props) {
    const canvasRef = useRef();
    let ctx;

    // The attributes of the player.
    var player = {
        x: 20,
        y: 20,
        x_v: 0,
        y_v: 0,
        jump: true,
        height: 20,
        width: 20
    };

    var deathBox = {
        x: 0,
        y: 599,
        width: 650,
        height: 50
    }

    var success = {
        x: 649,
        y: 0,
        width: 20,
        height: 600
    }
    // The status of the arrow keys
    var keys = {
        right: false,
        left: false,
        up: false,
    };
    // The friction and gravity to show realistic movements    
    var gravity = 0.6;
    var friction = 0.7;
    // The number of platforms
    var num;
    if (props.platformNumber > 7){
        num = 7;
    } else {
        num = props.platformNumber;
    }
    // var num = props.platformNumber;
    // The platforms
    var platforms = [];
    // Function to render the canvas
    function rendercanvas() {
        ctx.fillStyle = "#F0F8FF";
        ctx.fillRect(0, 0, 650, 600);
    }
    // Function to render the player
    function renderplayer() {
        ctx.fillStyle = "#F08080";
        ctx.fillRect((player.x) - 20, (player.y) - 20, player.width, player.height);
    }
    // Function to create platforms
    function createplat() {
        for (let i = 0; i <= num; i++) {
            const platform = {
                x: (100 + num * 10) * i,
                y: 100 + (60 * i),
                width: 110,
                height: 15
            }

            if (i === num) {
                platform.width = 200;
            }
            platforms.push(
                platform
            );
        }
    }
    // Function to render platforms
    function renderplat() {
        ctx.fillStyle = "#45597E";
        for (const platform of platforms) {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        }
    }

    function renderDeathBox() {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(deathBox.x, deathBox.y, deathBox.width, deathBox.height);
    }

    function renderSuccess() {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(success.x, success.y, success.width, success.height);
    }
    // This function will be called when a key on the keyboard is pressed
    function keydown(e) {
        // 37 is the code for the left arrow key
        if (e.keyCode == 37) {
            keys.left = true;
        }
        // 37 is the code for the up arrow key
        if (e.keyCode == 38) {
            if (player.jump == false) {
                player.y_v = -10;
            }
        }
        // 39 is the code for the right arrow key
        if (e.keyCode == 39) {
            keys.right = true;
        }
    }
    // This function is called when the pressed key is released
    function keyup(e) {
        if (e.keyCode == 37) {
            keys.left = false;
        }
        if (e.keyCode == 38) {
            if (player.y_v < -2) {
                player.y_v = -3;
            }
        }
        if (e.keyCode == 39) {
            keys.right = false;
        }
    }
    function loop() {
        // If the player is not jumping apply the effect of frictiom
        if (player.jump == false) {
            player.x_v *= friction;
        } else {
            // If the player is in the air then apply the effect of gravity
            player.y_v += gravity;
        }
        player.jump = true;
        // If the left key is pressed increase the relevant horizontal velocity
        if (keys.left) {
            player.x_v = -2.5;
        }
        if (keys.right) {
            player.x_v = 2.5;
        }
        // Updating the y and x coordinates of the player
        player.y += player.y_v;
        player.x += player.x_v;
        // A simple code that checks for collions with the platform
        let platform = -1;
        for(let i = 0; i < platforms.length; i++){
            if (platforms[i].x < player.x && player.x < platforms[i].x + platforms[i].width &&
                platforms[i].y < player.y && player.y < platforms[i].y + platforms[i].height) {
                platform = i;
            }
        }
        if (deathBox.x < player.x && player.x < deathBox.x + deathBox.width &&
            deathBox.y < player.y && player.y < deathBox.y + deathBox.height) {
            props.setGameState('death');
        }
        if (success.x < player.x && player.x < success.x + success.width &&
            success.y < player.y && player.y < success.y + success.height) {
            props.setEncounterState('escaped');
        }
        if (platform > -1) {
            player.jump = false;
            player.y = platforms[platform].y;
        }
        // Rendering the canvas, the player and the platforms
        rendercanvas();
        renderplayer();
        renderplat();
        renderDeathBox();
        renderSuccess();
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        ctx = canvas.getContext('2d');
        ctx.canvas.height = 600;
        ctx.canvas.width = 650;
        createplat();
        // Adding the event listeners
        document.addEventListener("keydown", keydown);
        document.addEventListener("keyup", keyup);
        setInterval(loop, 22);

    }, [])
    

    return (
        <React.Fragment>
            <canvas ref={canvasRef} />
        </React.Fragment>
    );
}

export default Run;
