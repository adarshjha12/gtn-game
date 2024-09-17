//selecting elements from document and storing in a variable

let input = document.querySelector('#guessfield')
let submit = document.querySelector('#sub')
let randomNumber = Math.round(Math.random() * 1000 + 1)
let preGuess = document.querySelector('.prev-guess')
let remainAttempt = document.querySelector('.remain-guess')
let textMsg = document.querySelector('.messages')
let startOver = document.querySelector('.result-paras')

let p = document.createElement('p')
let guessArray = []
let attempt = 1
let playgame = true

if (playgame === true) {
    
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        let guess = parseInt(input.value)
        validateGuess(guess)
        submit.style.backgroundColor = 'yellow'
    })
}

function validateGuess(guess) {
    if (guess < 0 || guess > 1000 || isNaN(guess)) {
        alert('please enter valid number between 1 - 100')
    }
    else{
        guessArray.push(guess)
        // guess = guess

        if (attempt === 11) {
            cleanGuess(guess)
            endGame()
            displayMessage(`Game over! Random number was ${randomNumber}`)
            textMsg.style.color = 'red'
            newGame(guess)
            remainAttempt.innerHTML = 0
        } 

        else{
            cleanGuess(guess)
            checkGuess(guess)
        }
        
    }
}

function checkGuess(guess) {
     if(guess === randomNumber){
        cleanGuess(guess)
        endGame()
        displayMessage(`congratulations! you guessed it right`)
        textMsg.style.color = 'magenta'
        textMsg.style.fontSize = '.8rem'
        newGame()

    } else if(guess > randomNumber){
        displayMessage('random number is too high')
        textMsg.style.color = 'yellow'

    }
     else if(guess < randomNumber){
        displayMessage('random number is too low')
        textMsg.style.color = 'aqua'

    }
}

function cleanGuess(guess) {
    input.value = ''
    preGuess.innerHTML += `${guess},  `
    attempt++
    remainAttempt.innerHTML = `${11 - attempt}`
   
}

function displayMessage(message) {
    textMsg.innerHTML = `<h2>${message}</h2>`
    textMsg.style.paddingTop = '40px'

}

function endGame() {
    input.setAttribute('disabled', '')
    playgame = false
    attempt = 1
    p.classList.add('bbb')
    p.innerHTML = '<h3 id="newgame">Start new game</h3>'
    p.style.marginTop = '20px'
    p.style.marginLeft = '50px'
    p.style.backgroundColor = 'aqua'
    p.style.borderRadius = '10px'
    p.style.color = 'black'
    p.style.width = '200px'
    p.style.textAlign = 'center'
    p.style.textTransform = 'capitalize'
    p.style.cursor = 'pointer'
    startOver.appendChild(p)

    newGame()
}

function newGame() {

 let game = document.getElementById('newgame')
    game.addEventListener('click', function(e){
    input.removeAttribute('disabled', '')
    p.style.backgroundColor = 'orange'
    input.value = ''
    preGuess.innerHTML = ''
    randomNumber = Math.round(Math.random() * 100 + 1)
    p.innerHTML = ''
    playgame = true
    
    })
}
// console.log(randomNumber);