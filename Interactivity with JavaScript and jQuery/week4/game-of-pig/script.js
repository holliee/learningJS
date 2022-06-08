(function () {
    'use strict';


    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['player1', 'player2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function () {
        //change index...
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = "<h2>The Game has started</h2>";
        gameControl.innerHTML += '<button id="quit">Want to Quit?</button>';

        document.getElementById('quit').addEventListener('click', function () {
            location.reload();
        });

        console.log(gameData.index);
        setUpTurn();

    });

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for player ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice!</button>';
        document.getElementById('roll').addEventListener('click', function () {
            throwDice();
        });
    }

    function throwDice() {
        //clear out actionArea
        actionArea.innerHTML = '';

        //record the two rolls of the dice
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in zero
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        //set a message and show the dice
        game.innerHTML = `<p>Roll the Dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}" alt="die">
        <img src="${gameData.dice[gameData.roll2 - 1]}" alt="die">`;

        //total the rolls
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //if two 1's are rolled...
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //show the current score
            checkWinningCondition();

            setTimeout(setUpTurn, 2000);

        }

        //if either die is a 1...
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}!</p>`;
            setTimeout(setUpTurn, 2000);

        }

        // if neither die is a 1...
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again?</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();

            });
            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            //winning condition met
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = "";
            document.getElementById('quit').innerHTML = "Start a new game?";
        }
        else {
            //show current score
            score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
                ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
                    ${gameData.score[1]}</strong></p>`;


        }
    }

})();