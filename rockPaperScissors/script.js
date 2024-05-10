let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    tie: 0
};
updateScoreElement();

function myFunction(yourmove) {
    let MoveValue = Math.random();

    let ComputerMove = '';

    if (MoveValue >= 0 && MoveValue < 1 / 3) {
        ComputerMove = 'Rock';
    } else if (MoveValue >= 1 / 3 && MoveValue < 2 / 3) {
        ComputerMove = 'Paper';
    } else {
        ComputerMove = 'Scissor';
    }

    let result = '';

    if (ComputerMove === yourmove) {
        result = 'Tie';
    }
    if (ComputerMove === 'Scissor' && yourmove === 'Paper' || ComputerMove === 'Paper' && yourmove === 'Rock' || ComputerMove === 'Rock' && yourmove === 'Scissor') {
        result = 'You Lose';
    }
    if (ComputerMove === 'Paper' && yourmove === 'Scissor' || ComputerMove === 'Rock' && yourmove === 'Paper' || ComputerMove === 'Scissor' && yourmove === 'Rock') {
        result = 'You win';
    }


    if (result === 'You win') {
        score.wins += 1;
    }
    else if (result === 'You Lose') {
        score.losses += 1;
    }
    else  {
        score.tie += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML = `Your Choice : <img src="image/${yourmove}.png" class="move-icon"> | Computer Choice <img src ="image/${ComputerMove}.png" class="move-icon">`;
    updateScoreElement();
}

function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Tie: ${score.tie}`;
};