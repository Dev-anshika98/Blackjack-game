let firstcard = 16
let secondcard = 5 +6
let sum = firstcard + secondcard
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string
let message =""
if(sum <= 20){
    message = "Do you want to draw a new card? 🙂"
}
else if(sum === 21){
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
}
else {
    message = "You're out of the game! 😭"
    isAlive = false
}
// console.log(hasBlackJack)
// console.log(isAlive)

console.log(message)


























































// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   //false



















// let age = 22
// if (age <= 20){
//     console.log("You can not enter the club!")
// }
// else{
//     console.log("Welcome!!")
// }

// let age = 200
// if(age < 100){
//     console.log("Not elegible")
// }
// else if(age === 100){
//     console.log("Here is your birthday card from the King!")
// }else{
//     console.log("Not elegible, you have already gotten one")
// }