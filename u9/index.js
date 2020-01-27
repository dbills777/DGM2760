function duplicateMenu() {
  //get all the anchor elements from the top menu
  topList = document.querySelectorAll("ul#primaryNavigation li a");
  console.log(topList);
  // can check inspect tools to find all available properties of a NodeLIst

  //create the new list items for the bottom of the page
  topList.forEach(menuItem => {
    let newUl = document.createElement("ul");
    let newLi = document.createElement("li");
    let newLink = document.createElement("a");
    newLink.setAttribute("href", menuItem.getAttribute("href"));
    newLi.appendChild(newLink);
    document.querySelector("#smallNavArea").appendChild(newUl);
    newUl.appendChild(newLi);
    console.log(menuItem.text);
    newLink.textContent = menuItem.innerText;
  });
}

duplicateMenu();
