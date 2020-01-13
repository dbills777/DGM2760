//set the company name
document.querySelector("#companyName").textContent = "Fortune Teller";
//set the company slogan
document.querySelector("#companySlogan").textContent =
  "Play to recieve your fortune!";

const youWon = document.querySelector(".gameOut");

let result = document.createElement("p");
let results = document.querySelector("#result");

//create a random number between 1 and 12.

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let month = randomNumber(1, 12);
let fate = randomNumber(1, 5);
let day = randomNumber(1, 30);

function getMonth(month) {
  switch (month) {
    case 1:
      name = "January";
      break;
    case 2:
      name = "February";
      break;
    case 3:
      name = "March";
      break;
    case 4:
      name = "April";
      break;
    case 5:
      name = "May";
      break;
    case 6:
      name = "June";
      break;

    case 7:
      name = "July";
      break;
    case 8:
      name = "August";
      break;
    case 9:
      name = "September";
      break;
    case 10:
      name = "October";
      break;
    case 11:
      name = "November";
      break;
    case 12:
      name = "December";
      break;
    default:
      name = "Not a Month";
      break;
  }
  return name;
}
function fortune(fate) {
  let message;
  switch (fate) {
    case 1:
      message =
        "If you think you can do a thing or think you can’t do a thing, you’re right.";
      break;
    case 2:
      message = "Curiosity kills boredom. Nothing can kill curiosity.";
      break;
    case 3:
      message =
        "Each day, compel yourself to do something you would rather not do.";
      break;
    case 4:
      message =
        "First think of what you want to do; then do what you have to do.";
      break;
    case 5:
      message =
        "For the things we have to learn before we can do them, we learn by doing them.";
      break;

    default:
      break;
  }
  return message;
}

const monthName = getMonth(month);
const fortuneMessage = fortune(fate);
console.log(fortuneMessage);

console.log(monthName);

const outFortune = `On ${monthName} ${day}, You will ${fate}`;
console.log(outFortune);

result.textContent = outFortune;
results.appendChild(result);
