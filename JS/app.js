/*----- constants -----*/
const COUNTDOWN = 3;


/*----- app's state (variables) -----*/
let playerWeapon;

let computerWeapon;

let scores;

var weapons;

let stage;

let beepAudio = new Audio("http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3");

/*----- cached element references -----*/

let weaponsBox = document.getElementById("weapons");
let scoresBox = document.getElementById("scores");
let humanScore = document.getElementById("h-score");
let computerScore = document.getElementById("c-score");
let draws = document.getElementById("draws");
let matchHumanScore = document.getElementById("h-mscore");
let matchComputerScore = document.getElementById("c-mscore");
let resultsBox = document.getElementById("results");
let resultsText = document.querySelector("#results > p");
let resetButton = document.querySelector("footer > button");
/*----- event listeners -----*/
weaponsBox.addEventListener('click', weaponClick);

/*----- functions -----*/

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is loaded!");
});

function getWinnner() {
    if (playerWeapon === computerWeapon) {
        return 't';
    } else {
        if (weapons[playerWeapon] === computerWeapon) {
            return 'w';
        } else {
            return 'l';
        }
    }
};

function doCountdown(winner) {
    let countRemaining = COUNTDOWN;
    beepAudio.play();
    resultsText.textContent = countRemaining;
    let counter = setInterval(function() {
        countRemaining--;
        if (countRemaining) {
            resultsText.textContent = countRemaining;
            beepAudio.play();
        } else {
            clearInterval(counter);
            if (winner === 't') {
                scores.round.draw++;
                resultsText.textContent = "It's a DRAW!";
            } else if (winner === 'w') {
                scores.round.win++;
                resultsText.textContent = "You WIN!";
            } else {
                scores.round.lose++;
                resultsText.textContent = "You LOSE!";
            }
        }
        stage = 'results';
        reDraw();
        setTimeout(function() {
            stage = 'select';
            reDraw();
        }, 3000);
    }, 1000);
};

function weaponClick(e) {
    playerWeapon = e.target.alt;
    console.log(playerWeapon);

    // randomly select cp's weapons
    let choices = Object.keys(weapons);
    let rando = Math.floor(Math.random() * 3);
    computerWeapon = choices[rando];
    console.log(computerWeapon);
    
    let winner = getWinnner();
    stage = 'countdown';
    doCountdown();
};

function reDraw() {
    humanScore.textContent = scores.round.win;
    computerScore.textContent = scores.round.lose;
    draws.textContent = scores.round.draw;

    matchHumanScore.textContent = scores.match.wins;
    matchComputerScore.textContent = scores.match.lose;

    switch (stage) {
        case 'select':
            // do stuff if in select stage
            // hide results
            resultsBox.style.display = 'none';
            // display weapons
            weaponsBox.style.display = 'block';
            break;
        case 'countdown':
        case 'results':
            // do stuff if counting down
            // hide weapons
            weaponsBox.style.display = 'none';
            // show results
            resultsBox.style.display = 'block';
            break;		
    }
};

function initialize() {
    scores = {
        round: {
            win: 0,
            draw: 0,
            lose: 0
        },
        match: {
            win: 0,
            lose: 0
        }
    }

    weapons = {
        r: 's',
        p: 'r',
        s: 'p'
    }

    playerWeapon = 'r';
    computerWeapon = 'r';
    stage = "select";
    reDraw();
}

initialize();