//set the company name
document.querySelector("#companyName").textContent = "The Arborist";
//set the company slogan
document.querySelector("#companySlogan").textContent = "Sort & Display Arrays";

//initial array
const trees = ["oak", "Pine", "spruce", "Juniper"];
//error handler
const errorElement = document.querySelector("#error");
//results display
const displaResults = document.querySelector("#displayResults");

displayResults.textContent = "test display results";
errorElement.textContent = "test display results";

const listTrees = () => {
  let treeList = "";
  trees.forEach(tree => {
    treeList += `${tree}<br>`;
    console.log(tree);
    displayResults.innerHTML = `${treeList}`;
  });
};

listTrees();
