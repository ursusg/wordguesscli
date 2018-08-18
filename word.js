var Letter = require("./letter")

var Words = function (wordToGuess) {

    // Makes it so that randomly chosen word is defined inside the constructor
    // as itself
    this.wordToGuess = wordToGuess

    // An empty letter array that can be used to store the indvidual letters
    this.letterArray = [];

    // Splits the word that was chosen and then equals it to the letterArray.
    this.splitLetters = function () {
        this.letterArray = this.wordToGuess.split("");
    };

    // Takes the constructor Letter and runs through the letterArray, making each letter an object.
    this.turnLettersIntoObjects = function () {

        // Runs a for loop to generate each of the letters as an object within the lettersArray
        for (let i in this.letterArray) {
            this.letterArray[i] = new Letter(this.letterArray[i]);

            console.log(this.letterArray[i].letter);

        };


    };

    // letterBeingGuessed = result in index.js
    this.displayLetters = function (letterBeingGuessed) {

        // runs the letterCheck and displayFunction of each letter's object
        for (let i in this.letterArray) {

            this.letterArray[i].letterCheck(letterBeingGuessed);
            this.letterArray[i].displayFunction();

        }

    };

};

module.exports = Words;