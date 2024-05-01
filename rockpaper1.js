let score = JSON.parse(localStorage.getItem('score'));
if(score === null){
    score = {
        wins : 0,
        lose : 0,
        tie  : 0, 
    }
}
updateScore();

function pickbycomputer(){
    let computerMove = '';
    const randomNum = Math.random();
    
    if(randomNum >=0 && randomNum < 1/3){
        computerMove = 'rock';
    }
    else if (randomNum >= 1/3 && randomNum < 2/3){
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissor';
    }
   return computerMove;
}

function updateScore(){
    document.querySelector('.js-updatescore').innerHTML =
    ` wins : ${score.wins} loses : ${score.lose} tie : ${score.tie}`;
}
let autovar = false;
let intervalid;
function autoplay(){
    if(!autovar){
        intervalid = setInterval(function(){
            const auto = pickbycomputer();
            playerchoice(auto);
        },2000)
        autovar = true;
    }
    else{
        clearInterval(intervalid);
        autovar = true;
    }
    
}
function playerchoice(choice){
    const computerMove = pickbycomputer();
    let result = '';
    if(choice === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie';
        }
        else if(computerMove === 'paper'){
            result = 'You Lose';
        }
        else if(computerMove === 'scissor'){
            result = 'You Win';
        } 
    }
    if(choice === 'paper'){
        if(computerMove === 'rock'){
            result = 'You Win';
        }
        else if(computerMove === 'paper'){
            result = 'Tie';
        }
        else if(computerMove === 'scissor'){
            result = 'You Lose';
        }
    }
    if(choice === 'scissor'){
        if(computerMove === 'rock'){
            result = 'You Lose';
        }
        else if(computerMove === 'paper'){
            result = 'You Win';
        }
        else if(computerMove === 'scissor'){
            result = 'Tie';
        }
    }
    
    if(result === 'You Win'){
        score.wins += 1;
    }
    else if(result === 'You Lose'){
        score.lose += 1;
    }
    else if (result === 'Tie'){
        score.tie += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = 
    ` ${result}.`;

    document.querySelector('.js-Moves').innerHTML = 
    ` You <img class="movesicon"src="images/${choice}-emoji.png">.
    <img src="images/${computerMove}-emoji.png" class="movesicon">
    Computer`
}