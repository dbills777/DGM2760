//set the company name
document.querySelector("#companyName").textContent = "The Arborist";
//set the company slogan
document.querySelector("#companySlogan").textContent = "Sort & Display Arrays";
//initial array
const trees = ["oak", "Palm Tree", "spruce", "Juniper"];
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
  } else {
    error.textContent = "you need one tree to delete the first one";
    displayResults.textContent = "";
    listTrees();
  }
  listTrees();
};
//Remove second tree
document.querySelector("#remove_tree2").onclick = () => {
  if (trees.length < 2) {
    errorElement.textContent =
      "you need at least two trees to delete the second tree";
  } else if (trees.length >= 2) {
    trees.splice(1, 1);
  }
  listTrees();
};
//Remove last tree
document.querySelector("#remove_treeLast").onclick = () => {
  if (trees.length) {
    trees.pop();
  } else {
    error.textContent = "you need one tree to delete the last one";
    displayResults.textContent = "";
  }
  listTrees();
};

//Sort the array locale compare after tolowercase will sort alphabetically in the same case but not change the originally array
document.querySelector("#sortTrees").onclick = () => {
  lowercase = trees.map(tree => tree.toLowerCase());
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
  if (trees.length < 3) {
    displayResults.innerHTML = "";
    errorElement.innerHTML = "there is no tree 3 to display";
  } else {
    treeList = [...trees];
    displayResults.innerHTML = `Tree #3 is: ${treeList[2]}`;
  }
};
document.querySelector("#showName4").onclick = () => {
  if (trees.length < 4) {
    displaResults.innerHTML = "";
    errorElement.textContent = "there is no tree 4 to dipslay";
  } else {
    console.log(trees.length);
    treeList = [...trees];
    displayResults.innerHTML = `Tree # 4: is ${treeList[3]}`;
    console.log("check");
  }
};
