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
  const theStory = `One day a <span>${adjectivesArray[0]}</span> <span>${nounArray[0]}</span> was <span>${verbArray[0]}ing</span> down the river. The river had <span>${nounArray[1]}'s</span>, <span>${nounArray[2]}'s</span> and <span>${nounArray[3]}'s</span> in it. Around the <span>${adjectivesArray[1]}</span> corner, <span>${nounArray[0]}</span> saw a <span>${nounArray[4]}</span> that was <span>${verbArray[1]}ing</span> a <span>${adjectivesArray[2]}</span> <span>${nounArray[5]}</span>. That was the last time a <span>${verbArray[1]}ing </span><span>${nounArray[6]}</span> was sighted.`;
  const output = document.querySelector("#result");
  output.innerHTML = theStory;
}
