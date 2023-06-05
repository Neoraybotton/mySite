let rockDiv = document.getElementById("rockDiv");
let paperDiv = document.getElementById("paperDiv");
let scissorsDiv = document.getElementById("scissorsDiv");
let userScoreSpan = document.getElementById("userScore");
let computerScoreSpan = document.getElementById("computerScore");
let options = ['rock','paper','scissors'];
let userScore = 0;
let computerScore = 0;
let messageDiv = document.getElementById("message");
let gameRound = 0;
let elemUser =document.createElement("img");
let elemComputer =document.createElement("img");

rockDiv.addEventListener("mouseover",hoverIsOn);
rockDiv.addEventListener("mouseout",hoverIsOff);
paperDiv.addEventListener("mouseover",hoverIsOn);
paperDiv.addEventListener("mouseout",hoverIsOff);
scissorsDiv.addEventListener("mouseover",hoverIsOn);
scissorsDiv.addEventListener("mouseout",hoverIsOff);

rockDiv.addEventListener('mousedown', function() {startGame("rock")});
paperDiv.addEventListener('mousedown', function() {startGame("paper")});
scissorsDiv.addEventListener('mousedown', function() {startGame("scissors")});
function hoverIsOn(pEvent) {
    if(pEvent.target.className == "rps"){
        pEvent.target.style.backgroundColor='black';
        pEvent.target.style.transition = "0.4s";
    }
}

function hoverIsOff(pEvent){
    if(pEvent.target.className == "rps"){
        pEvent.target.style.backgroundColor='transparent';
    }
}

function startGame(pUserSelection) {
    let  UserChoice = pUserSelection;
    console.log("User:" + UserChoice)
    showSelection("userIcon",UserChoice,elemUser)

    let randomNumber = Math.floor(Math.random() * 3);
    console.log("random Number: " + randomNumber);

    let computerChoice = options[randomNumber];
    console.log("computer: " + computerChoice)
    rockPaperScissors(UserChoice, computerChoice)
    showSelection("computerIcon",computerChoice,elemComputer)
}

function rockPaperScissors(puserChoice, pcomputerChoice){
    gameRound = gameRound +1;
    let result = puserChoice + pcomputerChoice;

    if(gameRound == 3){
        if(userScore > computerScore){
            messageDiv.textContent = "Good job. You Won!";
            messageDiv.style.color = "green";

        }else if(computerScore > userScore){
            messageDiv.textContent = "Not So bad but not enough. Try again";
            messageDiv.style.color = "red";
        }else{
            messageDiv.textContent = "It's a draw";
            messageDiv.style.color = "orange";
        }
    }
        if (result == 'rockscissors' || result =='paperrock' || result =='scissorspaper'){
           console.log("You Won");
           userScore = userScore +1;
           userScoreSpan.textContent = userScore;
       }
        
        if (result == 'scissorsrock' || result =='rockpaper' || result =='paperscissors'){
            console.log("You Lost");
            computerScore = computerScore +1;
            computerScoreSpan.textContent = computerScore;
        }

        if (result == 'rockrock' || result =='paperpaper' || result =='scissorsscissors'){
           console.log("it's a draw");
    }
    }


    

function showSelection(pDivChiceIcon, pimgName, pElem) {
    pElem.setAttribute("src", "img/" + pimgName + ".png");
    pElem.setAttribute("hight", "40");
    pElem.setAttribute("width", "40");
    pElem.setAttribute("pading", "0");

    document.getElementById(pDivChiceIcon).appendChild(pElem);
}