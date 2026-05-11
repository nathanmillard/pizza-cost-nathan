//  Constants
let HST = 0.13
let LABOUR = 0.75
let RENT = 1
//  Input: Ask the user for the pizza diameter
let diameter = game.askForNumber("What is the pizza diameter?")
//  Calculate Subtotal
let materials = 0.5 * diameter
let subtotal = LABOUR + RENT + materials
//  Calculate Tax and Total
let tax = subtotal * HST
let total = subtotal + tax
//  Show the result in the game
game.splash("Subtotal: $" + ("" + ("" + subtotal)), "Total: $" + ("" + ("" + total)))
