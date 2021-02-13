const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-last-column]');
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper'
    }
]

selectionButtons.forEach(element => {
    element.addEventListener('click' , buttonClick => {
        const selectionData = element.dataset.selection;
        const findSelection = SELECTIONS.find(variable => variable.name === selectionData);
        makeSelection(findSelection);
    })
})

function makeSelection(element) {
    const pcNumber = SELECTIONS[chooseNumber()];
    const pcWinner = isWinner(pcNumber , element);
    const userWinner = isWinner(element , pcNumber);
    const pcScore = document.querySelector('.pcresult__score');
    const yourScore = document.querySelector('.yourresult__score');

    showResult(pcNumber , pcWinner);
    showResult(element, userWinner);

    addScore(pcScore , pcWinner);
    addScore(yourScore, userWinner);
}

function addScore(score ,winner) {
    scoreNumber = convertNumber(score.innerText);
    if(winner)
    {
        scoreNumber++;
        console.log(scoreNumber);
        score.innerText = scoreNumber;
        console.log(score);
    }
}

function convertNumber(element) {
    return Number(element);
}

function showResult(element , winner) {
    const div = document.createElement('div');
    div.innerText = element.emoji;
    div.classList.add('result__selection');
    if(winner)
        div.classList.add('winner');
    finalColumn.after(div);
}

function isWinner(yourSelection , pcSelection) {
    return yourSelection.beats === pcSelection.name;
}

function chooseNumber() {
    const number = Math.floor(Math.random() * SELECTIONS.length);
    return number;
}