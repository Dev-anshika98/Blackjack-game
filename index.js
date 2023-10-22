let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let carEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame() {

    sumEl.textContent = "Sum: " + sum
    carEl.textContent = "Cards: " + cards[0] + " "  + cards[1]

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}

function newcard() {
    console.log("Drawing a new card from the deck!")
       // 1. Create a card variable, and hard code its value to a number (2-11)
       let card = 3
       // 2. Add the new card to the sum variable
       sum += card
       // 3. Call startGame()
       startGame()
}
