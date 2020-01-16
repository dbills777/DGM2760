//set the company name
document.querySelector("#companyName").textContent = "The Arborist";
//set the company slogan
document.querySelector("#companySlogan").textContent = "Sort & Display Arrays";
//initial array
const trees = ["oak", "palm tree", "Pine", "spruce", "Juniper"];
//error handler
const errorElement = document.querySelector("#error");
//results display
const displaResults = document.querySelector("#displayResults");
// Get heading for the tree list for specific tree numbers
const treeListTitle = document.querySelector(".treeListTitle");

const listTrees = () => {
  let treeList = "";
  trees.forEach(tree => {
    treeList += `${tree}<br>`;
    displayResults.innerHTML = `${treeList} <span>${trees.length} trees in the list.</span>`;
  });
  if (errorElement.hasChildNodes) {
    error.textContent = "";
  }
};

listTrees();
// BUTTON HANDLERS*****************************************
// RedWood Push
document.querySelector("#add_redwood").onclick = () => {
  trees.push("Redwood");
  listTrees();
};
//Pear unshift
document.querySelector("#add_pear").onclick = () => {
  trees.unshift("Pear");
  listTrees();
};
//Remove first tree
document.querySelector("#remove_tree1").onclick = () => {
  if (trees.length > 0) {
    trees.shift();
    listTrees();
  } else {
    trees.length = 0;
    error.textContent = "you have no trees left";
    displayResults.textContent = "";
  }
};
//Remove second tree
document.querySelector("#remove_tree2").onclick = () => {
  if (trees.length > 1) {
    trees.splice(1, 1);
  } else {
    error.textContent = "There is not second tree to remove from the list";
  }
  listTrees();
};
//Remove last tree
document.querySelector("#remove_treeLast").onclick = () => {
  trees.splice(trees.length - 1, 1);
  listTrees();
};

//Sort the array locale compare after tolowercase will sort alphabetically in the same case but not change the originally array
document.querySelector("#sortTrees").onclick = () => {
  trees.sort((a, b) => {
    return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
  });
  listTrees();
};
document.querySelector("#lowerTrees").onclick = () => {
  trees.toLocaleString();
  // console.log(trees.toLocaleString().toLowerCase());
  let myTrees = trees.toLocaleString().toLowerCase();
  // console.log(myTrees.split(","));
  let treeList = "";
  myTrees.split(",").forEach(tree => {
    treeList += `${tree}<br>`;
    // console.log(tree);
    displayResults.innerHTML = `${treeList} <span>${trees.length} trees in the list.</span>`;
  });
};
document.querySelector("#showName3").onclick = () => {
  if (trees[2] === undefined) {
    console.log("no tree 3");
    displayResults.innerHTML = "";
    error.innerHTML = "there is no tree 3 to display";
  } else {
    console.log(trees.length);
    treeList = [...trees];
    displayResults.innerHTML = `${treeList[2]}`;
    treeListTitle.innerHTML = "The name of the third tree is:";
  }
};
document.querySelector("#showName4").onclick = () => {
  if (trees[3] === undefined) {
    displaResults.innerHTML = "";
    error.innerHTML = "there is no tree 4 to dipslay";
  } else {
    console.log(trees.length);
    treeList = [...trees];
    displayResults.innerHTML = `${treeList[3]}`;
    treeListTitle.innerHTML = "The name of the fourth tree is:";
    console.log("check");
  }
};
