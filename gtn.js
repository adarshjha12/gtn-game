let input = document.querySelector('#guessfield')
let submit = document.querySelector('#sub')
let randomNumber = parseInt(Math.random() * 100 + 1)
let GuessSlot = document.querySelector('.prev-guess')
let remaining = document.querySelector('.remain-guess')
let lowHI = document.querySelector('.messages')
let startOver = document.querySelector('.result-paras')

let p = document.createElement('p')

let prevGuess = []
let attempt = 1
let playGame = true

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault()
    submit.style.backgroundColor = 'red'
    let guess =  parseInt(input.value);
    console.log(guess);
    validateGuess(guess)
  })
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('please enter a valid number');
  } 
  else{
    prevGuess.push(guess)

    if(attempt > 10){
      cleanupGuess(guess)
      displayMessage(`game over. random number was ${randomNumber}`)
      endGame()
    } 
    else{
      cleanupGuess(guess)
      checkGuess(guess)
      submit.style.backgroundColor = 'yellow'
    }
  }
}

function checkGuess(guess) {
    if(guess === randomNumber){
      displayMessage('you gussed it right')
      endGame()
    } else if( guess < randomNumber){
      displayMessage("number is too low")
    }
     else if( guess > randomNumber){
      displayMessage("number is too high")
    }
}

function cleanupGuess(guess) {
    input.value = ''
    GuessSlot.innerHTML += `${guess}, `
    remaining.innerHTML = `${10 - attempt}`
    attempt++;
}

function displayMessage(message) {
    lowHI.innerHTML = `<h3>${message}</h3>`
}

function endGame() {
    input.setAttribute('disabled', '')
    attempt = 0
    p.classList.add('button')
    p.innerHTML =" <h3 id='endgame'> Start new game</h3>"
    p.style.backgroundColor = 'yellow'
    p.style.color = 'black'
    p.style.width = '200px'
    p.style.textAlign = 'center'
    p.style.marginTop = '20px'
    p.style.borderRadius = '10px'
    p.style.cursor = 'pointer'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
  let endgame = document.getElementById('endgame')
  endgame.addEventListener('click', function (e) {
    p.style.backgroundColor = 'orange'
    input.removeAttribute('disabled', '')
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    GuessSlot.innerHTML = ''
    startOver.removeChild(p)
    attempt = 0
    attempt++
    remaining.innerHTML = `${10 - attempt}`
    playGame = true
  })
}
