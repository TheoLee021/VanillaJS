const range = document.querySelector('#range');
const guess = document.querySelector('#guess');
const guessForm = document.querySelector('#guess-form');
const result = document.querySelector('#result');
const chosenNumberDisplay = document.querySelector('#chosen-number-display');
const userNumberDisplay = document.querySelector('#user-number-display');
const machineNumberDisplay = document.querySelector('#machine-number-display');
const rangeError = document.querySelector('#range-error');

function checkGuess(event) {
    event.preventDefault();

    if (!range.value) {
        rangeError.classList.remove('hidden');
        return;
    }
    
    rangeError.classList.add('hidden');
    const maxRange = parseInt(range.value);
    const randomNumber = Math.round(Math.random() * maxRange);
    const userNumber = parseInt(guess.value);
    
    userNumberDisplay.innerText = userNumber;
    machineNumberDisplay.innerText = randomNumber;
    chosenNumberDisplay.classList.remove('hidden');
    
    if(userNumber === randomNumber) {
        result.innerText = 'You win!';
    } else {
        result.innerText = 'You lose!';
    }
    result.classList.remove('hidden');
}

guessForm.addEventListener('submit', checkGuess);