//set the company name
document.querySelector("#companyName").textContent = "Hi/Lo Guessing Game";
//set the company slogan
document.querySelector("#companySlogan").textContent =
  "Try to Guess The Right Number";
//create a random number
const gameNumber = Math.floor(Math.random() * 15) + 1;
console.log(gameNumber);

const youWon = document.querySelector(".gameOut");
let trys = document.querySelector("#trys");
let yourNumber = document.querySelector("#number");
let results = document.querySelector("#result");
const prizeSpot = document.querySelector("#prize");

let yourGuess = document.createElement("p");
let eachTry = document.createElement("p");
let result = document.createElement("p");
const prizeContainer = document.createElement("p");
const prize = document.createElement("img");
prize.classList.add("award");
let userGuess = [];

let numOfGuesses = 0;
function checkGuess() {
  userGuess = document.querySelector("#guess").value;
  numOfGuesses += 1;
  // check if invalid number is manually typed in constraints wont allow selection
  // if it is less than 1 or greater than 15 a message is displayed in the results
  // set numOfGuesses to 0 (invalid numbers do not count as an attempt)
  if (userGuess > 16 || userGuess < 1) {
    result.textContent = "Please Select A number between 1 and 15";
    // -=1 to decrement the incorrect guess form the total number of guesses
    numOfGuesses -= 1;
    append();
  } else if (userGuess > gameNumber) {
    result.textContent = "Your Guess Was Too High";
    append();
  } else if (userGuess < gameNumber) {
    result.textContent = "Your Guess was Too Low";
    append();
  } else if (userGuess == gameNumber) {
    result.textContent = ` You Won it took ${numOfGuesses} tries to get the number`;
    results.appendChild(result);
    award();
    append();
  }
}
console.log(numOfGuesses);
function append() {
  results.appendChild(result);
  yourNumber.appendChild(yourGuess);
  results.appendChild(result);
  yourNumber.appendChild(yourGuess);
  yourGuess.textContent = userGuess;
  yourNumber.appendChild(yourGuess);
  eachTry.textContent = numOfGuesses;
  trys.appendChild(eachTry);
  prizeSpot.appendChild(prizeContainer);
  prizeContainer.appendChild(prize);
  return numOfGuesses;
  console.log(numOfGuesses);
}
function award() {
  switch (numOfGuesses) {
    case 1:
    case 2:
    case 3:
      prize.setAttribute("src", "./images/blue.png");
      break;
    case 4:
    case 5:
    case 6:
      prize.setAttribute("src", "./images/Red.png");

      break;
    case 7:
    case 8:
    case 9:
    case 11:
    case 12:
    case 13:
    case 14:
      prize.setAttribute("src", "./images/yellow.jpg");

      break;
  }
}
