
const playerText = document.querySelector('#playerText');
const botText = document.querySelector('#botText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');
let player;
let bot;
let result;

choiceBtns.forEach(button => button.addEventListener('click', () => {

    player = button.textContent;
    botTurn();
    playerText.textContent = `Player: ${player}`;
    botText.textContent = `Bot: ${bot}`;
    resultText.textContent = checkWinner();

}));

function botTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            bot = "stone";
            break;

            case 2:
                bot = "paper";
                break; 
                
                case 3:
                    bot = "scissor";
                    break;    
    }
}

function checkWinner(){
    if(player == bot){
        return 'draw';
       
    }
    else if(bot == 'stone'){
        return(player == 'paper')? 'you win..' : 'you lose..';
    }
    else if(bot == 'paper'){
        return(player == 'scissor')? 'you win..' : 'you lose..';
    }
    else if(bot == 'scissor'){
        return(player == 'stone')? 'you win..' : 'you lose..';
    }
}