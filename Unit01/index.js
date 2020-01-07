//set the company name
document.querySelector("#companyName").textContent = "Joes Bed & Breakfast";
//set the company slogan
document.querySelector("#companySlogan").textContent =
  "Welcome to Joes Bed and Breakfast!";
const currentDate = new Date();
// query elemten to place date
dateSpan = document.querySelector(".span");
//create the date
const date = new Date().toLocaleDateString();
//set its text content with template string
dateSpan.textContent = ` ${date}`;
//prompt for the greeting name and create the message
const greet = document.querySelector("#greet");
greet.textContent = `Hello ${prompt(
  "Please Enter your name"
)}, How are you today?`;
