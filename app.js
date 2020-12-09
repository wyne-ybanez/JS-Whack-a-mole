// get your classes and ids
const square = document.querySelector('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')

let score = document.querySelector('#score') 

let result = 0 
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    // define a random position for the mole - round to nearest integer
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    // assign the id of the randomPosition to hitPosition for us to use Later
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitposition) {
          result = result + 1

          // to visually display the win
          score.textContent = result  
        }
    })
})

// Move the mole randomly every 500 seconds
function moveMole() {
    let timerId = null 
    timerId = setInterval (randomSquare, 500)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is' + result)
    }
}

let timerId = setInterval(countDown, 1000)
