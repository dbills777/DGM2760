//set the company name
document.querySelector("#companyName").textContent = "Grants Tomb";
//set the company slogan
document.querySelector("#companySlogan").textContent = "Object Literals";

// ***************************************************************************************************

const question = {
  stem: "Who is burried in grants tomb?",
  option1: "Tywin",
  option2: "Tyrion",
  option3: "Grant",
  option4: "Cersei",
  correct: 3,
  display: () => {
    document.querySelector("#stem").textContent = question.stem;
    document.querySelector("#stem").className = "stem";
    //then display the question options here
    document.querySelector("#answer1").textContent = question.option1;
    document.querySelector("#answer2").textContent = question.option2;
    document.querySelector("#answer3").textContent = question.option3;
    document.querySelector("#answer4").textContent = question.option4;
  },
  check: userChoice => {
    if (userChoice === question.correct) {
      document.querySelector(".feedback").classList.add("correct");
      document.querySelector(
        ".feedback"
      ).textContent = `you are correct! ${question.option3} is burried in Grants Tomb`;
    } else if (userChoice !== question.correct) {
      document.querySelector(".feedback").classList.remove("correct");

      document.querySelector(".feedback").classList.add("wrong");
      document.querySelector(
        ".feedback"
      ).textContent = `Sorry, ${userChoice} is not the correct answer`;
    }
  }
};
document
  .querySelector("#answer1")
  .addEventListener("click", () => question.check(question.option1));
document
  .querySelector("#answer2")
  .addEventListener("click", () => question.check(question.option2));
document
  .querySelector("#answer3")
  .addEventListener("click", () => question.check(3));
document
  .querySelector("#answer4")
  .addEventListener("click", () => question.check(question.option4));

question.display();
