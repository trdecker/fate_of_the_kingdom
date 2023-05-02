import React, { useEffect, useRef } from 'react';

function Run(props) {
    const canvasRef = useRef();
    let showFrame1 = true;
    let canvas;
    let ctx;

    const platformImage = new Image();
    platformImage.src = require('../../images/platform.png')

    const heroImage = new Image();
    heroImage.src = require('../../images/hero.png')

    // Player
    let player = {
        x: 30,
        y: 45,
        x_v: 0,
        y_v: 0,
        jump: true,
        height: 60,
        width: 45
    };

    let deathBox = {
        x: 0,
        y: 599,
        width: 650,
        height: 50
    }

    let success = {
        x: 649,
        y: 0,
        width: 20,
        height: 600
    }

    // Keys
    let keys = {
        right: false,
        left: false,
        up: false,
    };
  
    let gravity = 0.6;
    let friction = 0.7;

    let num;
    if (props.platformNumber > 7){
        num = 7;
    } else {
        num = props.platformNumber;
    }


    let platforms = [];
    // Render Canvas
    function rendercanvas() {
        ctx.fillStyle = "#F0F8FF";
        ctx.fillRect(0, 0, 650, 600);
    }
    // Render Player
    function renderplayer() {
        ctx.drawImage(heroImage, player.x - 45, player.y - 60, player.width, player.height);

    }
    // Create Platforms
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
    // Render Platforms
    function renderplat() {
        for (const platform of platforms) {
        ctx.drawImage(platformImage, platform.x, platform.y, platform.width, platform.height);
        // ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
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

    // Keys pressed
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
        canvas = canvasRef.current;
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
