//set the company name
document.querySelector("#companyName").textContent = "Inspector Clouseau";
//set the company slogan
document.querySelector("#companySlogan").textContent =
  "Welcome to Inspector Clouseau's";

size = () => {
  document.querySelector(
    "#windowProperties"
  ).innerText = `The window is ${window.innerWidth} pixels wide.\n The window is ${window.innerHeight} pixels tall.\n The window offset is ${window.screenLeft} from the left edge of the screen. \n The window offset is ${window.screenTop} from the top of the screen.\n The URL is ${window.location}.`;
};
document.querySelector(
  "#documentProperties"
).innerText = `The document title is ${document.title}\n and the document was last updated on ${document.lastModified}`;

size();
window.addEventListener("resize", size);
