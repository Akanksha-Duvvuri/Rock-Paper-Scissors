let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let reset = document.querySelector(".reset");
let scoreDisplay = document.querySelector("p");
let container = document.querySelector(".container");
let moves = document.createElement("p");

// console.log(JSON.parse(localStorage.getItem('score')));


let comp = "";
let result = "";

//if right is not true, left and vice versa
let score = JSON.parse(localStorage.getItem('score')) || {
                                                            wins: 0,
                                                            losses: 0,
                                                            ties: 0
                                                        };

function compMove() {
    let random = Math.floor(Math.random() * 3) + 1;
    if(random == 1){
        comp = "Rock";
    } else if(random == 2){
        comp = "Paper";
    } else if(random == 3){
        comp = "Scissors";
    }
}

function scores(){
    if(result === "You Win"){
        score.wins += 1;
    } else if(result === "You Lose"){
        score.losses += 1;
    } else if(result === "Tie"){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
}

function updateScore(){
    scoreDisplay.innerHTML = `Win: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    container.appendChild(scoreDisplay);
}

rock.addEventListener("click", function() {
    compMove();

    if(comp === "Rock"){
        result = "Tie";
    } else if(comp === "Paper"){
        result = "You Lose";
    } else if(comp === "Scissors"){
        result = "You Win";
    }

    scores();
    moves.innerHTML = `Result : ${result} <br>
    Computer: ${comp}, You: Rock.`;
    container.appendChild(moves);

    updateScore();
});

paper.addEventListener("click", function() {
    compMove();

    if(comp === "Rock"){
        result = "You Win";
    } else if(comp === "Paper"){
        result = "Tie";
    } else if(comp === "Scissors"){
        result = "You Lose";
    }

    scores();
    moves.innerHTML = `Result : ${result} <br>
    Computer: ${comp}, You: Paper.`;
    container.appendChild(moves);

    updateScore();
});

scissors.addEventListener("click", function() {
    compMove();

    if(comp === "Rock"){
        result = "You Lose";
    } else if(comp === "Paper"){
        result = "You Win";
    } else if(comp === "Scissors"){
        result = "Tie";
    }

    scores();
    moves.innerHTML = `Result : ${result} <br>
    Computer: ${comp}, You: Scissors.`;
    container.appendChild(moves);

    updateScore();
});


reset.addEventListener("click", function () {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.setItem('score', JSON.stringify(score))

    // scoreDisplay.innerHTML = `Win: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    // container.appendChild(scoreDisplay);
    moves.innerHTML = "";
    updateScore();
});

updateScore();