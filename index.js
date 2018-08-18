const inquirer = require('inquirer');
const Words = require('./word');
const prompt = require('prompt');

var wordList = [
    "chicken",
    "cow",
    "rabbit",
    "pig",
    "horse"
];

function randomWordPick() {

    // Picks a random word from the wordList array
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)]

    // Tells me what index &&
    // what word was picked from wordList array
    console.log("Index of wordList:" + " " + Math.floor(Math.random() * wordList.length))
    console.log("Word chosen:" + " " + randomWord)

    var wordToGuess = new Words(randomWord);

    // Runs the splitLetters function within the newly chosen word
    wordToGuess.splitLetters();

    // Runs the function to convert each letter into a letter object
    wordToGuess.turnLettersIntoObjects();

    // Displays the newly chosen word's letterArray
    // console.log(wordToGuess.letterArray);

    checkGuess(wordToGuess);
};

function startGame() {

    console.log("START GAME FUNCTION RAN, UNDERNEATH IS RANDOM WORD PICk")

    // Runs the randomWordPick (Defined above!)
    randomWordPick();

};

function checkGuess(wordToGuess) {
    // Starts prompt
    prompt.start();

    // Asks the user for a letter
    prompt.get("Letter", function (err, result) {

        if (err) {
            throw err
        };

        // Since result was an object, get the "Letter" key of the result and compare it all the way down to checkLetter and displayLetter
        // inside of the Letter constructor
        wordToGuess.displayLetters(result.Letter);
        console.log(result);

        for (let i in wordToGuess.letterArray) {

            if (wordToGuess.letterArray[i].guess === false) {
                nextRound(wordToGuess);
            }
            else {
                console.log("YOU DID IT!")
            }

        }

    })
};



inquirer.prompt([
    {
        type: "confirm",
        message: "Ready to play?",
        name: "confirm",
        default: true
    }
]).then(function (answers) {

    console.log("User is ready to play!")

    // Runs the startGame function.
    startGame();
});
