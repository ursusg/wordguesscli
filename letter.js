var Letter = function (inputLetter) {

    // Sets each letter's default guess as false
    this.guess = false;
    // Makes it so that the letter being constructed equals itself within the object
    this.letter = inputLetter

    // A function added to each letter that
    // Uses a conditonal to check if the guessed letter is equal 
    // to the letter being guessed
    this.letterCheck = function (userGuess) {

        if (userGuess === this.letter) {
            this.guess = true;
            console.log (`The letter ${this.letter} was right!`)
        };

    };

    // Calls each letter as a string to see if it's been guessed or not
    this.displayFunction = function () {
        if (this.guess === true) {
            console.log(this.letter)
        }
        else {
            console.log("_")
        }
    }
    
}

// Checking if the toString function works when the guess has been set to true!
// var letter1 = new Letter ("a");
// letter1.guess = true;
// letter1.toString();

module.exports = Letter;