//set the company name
document.querySelector("#companyName").textContent = "Nonsense Story";
//set the company slogan
document.querySelector("#companySlogan").textContent = "String Manipulation";

//get areas to append the results to
let result = document.createElement("p");
let results = document.querySelector("#result");

function tellStory() {
  nounArray = document
    .querySelector("#noun")
    .value.toLowerCase()
    .split(/\s*[,\n." "]+\s*/);
  console.log(nounArray);
  adjectivesArray = document
    .querySelector("#adjectives")
    .value.toLowerCase()
    .split(/\s*[,\n." "]+\s*/);
  console.log(adjectivesArray);
  verbArray = document
    .querySelector("#verbs")
    .value.toLowerCase()
    .split(/\s*[,\n." "]+\s*/);
  console.log(verbArray);
  const theStory = `Once upon a time there were four <span>${nounArray[0]}'s</span>`;
  const output = document.querySelector("#result");
  output.innerHTML = theStory;
}
