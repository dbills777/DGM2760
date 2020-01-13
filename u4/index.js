//set the company name
document.querySelector("#companyName").textContent = "Fortune Teller";
//set the company slogan
document.querySelector("#companySlogan").textContent =
  "Play to recieve your fortune!";

//get areas to append the results to
let result = document.createElement("p");
let results = document.querySelector("#result");

//generate random numbers between specific values
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//get a random month
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
//get a random fate
function fortune(fate) {
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
//getquote button action  append items to dom
function tellFortune() {
  let month = randomNumber(1, 12);
  let fate = randomNumber(1, 5);
  let day = randomNumber(1, 30);
  const monthName = getMonth(month);
  const fortuneMessage = fortune(fate);

  const outFortune = `For ${monthName} ${day}, Your Quote Is:
   ${fortuneMessage}`;

  result.textContent = outFortune;
  results.appendChild(result);
}
