let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let result = document.createElement("p");



rock.addEventListener("click", function() {
    let random = Math.floor(Math.random() * 3) + 1;

    if(random == 1){
        console.log("Computer chose rock, You chose Rock. Tie.");
        result.innerText = 'Tie';
    } else if(random == 2){
        console.log("Computer chose Paper, You chose Rock. You Lose.");
        result.innerText = 'You Lose';
    } else if(random == 3){
        console.log("Computer chose Scissors. You chose Rock. You Win.");
        result.innerText = 'You Win';
    }
});

paper.addEventListener("click", function() {
    let random = Math.floor(Math.random() * 3) + 1;
    
    if(random == 1){
        console.log("Computer chose rock, You chose Paper. You Win.");
        result.innerText = 'You Win';
    } else if(random == 2){
        console.log("Computer chose Paper, You chose Paper. Tie.");
        result.innerText = 'Tie';
    } else if(random == 3){
        console.log("Computer chose Scissors. You chose Papaer. You Lose.");
        result.innerText = 'You Lose';
    }
});

scissors.addEventListener("click", function() {
    let random = Math.floor(Math.random() * 3) + 1;

    if(random == 1){
        console.log("Computer chose rock, You chose Scissors. You Lose.");
        result.innerText = 'You Lose';
    } else if(random == 2){
        console.log("Computer chose Paper, You chose Scissors. You Win.");
        result.innerText = 'You Win';
    } else if(random == 3){
        console.log("Computer chose Scissors. You chose Scissors. Tie.");
        result.innerText = 'Tie';
    }
});