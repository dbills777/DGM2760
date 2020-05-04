//set the company name
document.querySelector("#companyName").textContent = "Joes Bed & Breakfast";
//set the company slogan
document.querySelector("#companySlogan").textContent =
  "Welcome to Joes Bed and Breakfast!";
const currentDate = new Date();
// select element to place date
dateSpan = document.querySelector(".span");
//create the date
const date = new Date().toLocaleDateString();
//set its text content with template string
dateSpan.textContent = ` ${date}`;
// select element to place greet input
const greet = document.querySelector("#greet");

function name() {
  let visitor = prompt("what is your name");
  if (visitor == null) {
    greet.textContent = "You Didn't Provide a Name, you're welcome anyway!";
  } else {
    greet.textContent = `Hello ${visitor}, Welcome to Joes Bed and Breakfast!`;
  }
}
name();
