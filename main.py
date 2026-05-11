# Constants
HST = 0.13
LABOUR = 0.75
RENT = 1
# Input: Ask the user for the pizza diameter
diameter = game.ask_for_number("What is the pizza diameter?")
# Calculate Subtotal
materials = 0.5 * diameter
subtotal = LABOUR + RENT + materials
# Calculate Tax and Total
tax = subtotal * HST
total = subtotal + tax
# Show the result in the game
game.splash("Subtotal: $" + ("" + str(subtotal)),
    "Total: $" + ("" + str(total)))