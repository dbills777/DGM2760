//set the company name
document.querySelector("#companyName").textContent = "Pizza Emporium";
//set the company slogan
document.querySelector("#companySlogan").textContent = "Object Literals";

// const shopping = document.querySelector("#shopping");
//results display
const displaResults = document.querySelector("#displayResults");
// Get heading for the tree list for specific tree numbers
const treeListTitle = document.querySelector(".shopListTitle");

let message;

const pizza = {
  crust: "thin",
  size: "small",
  topping: "pepperoni",
  toppingWeight: 1,
  flour: 1,
  buildPizza: function() {
    message = `We are baking a ${pizza.size} Pizza on a ${pizza.crust} cust with a topping of ${pizza.topping} just for you`;
    displaResults.textContent = message;
  },
  shoppingList: () => {
    let flour = 1;
    let toppingWeight = 1;
    if (pizza.crust === "thick") flour *= 2.5;
    if (pizza.size === "large") (flour *= 1.5), (toppingWeight += 1);
    message = `You Will Need to purchase ${flour} Cups of Flour and ${toppingWeight}lb of ${pizza.topping} To make Your Pizza`;
    displaResults.textContent = message;
  }
};

document
  .querySelector("#thin")
  .addEventListener("click", () => (pizza.crust = "thin"));
document
  .querySelector("#thick")
  .addEventListener("click", () => (pizza.crust = "thick"));
document
  .querySelector("#pepperoni")
  .addEventListener("click", () => (pizza.topping = "pepperoni"));
document
  .querySelector("#sausage")
  .addEventListener("click", () => (pizza.topping = "sausage"));
document
  .querySelector("#large")
  .addEventListener("click", () => (pizza.size = "large"));
document
  .querySelector("#small")
  .addEventListener("click", () => (pizza.size = "small"));

document
  .querySelector("#build-btn")
  .addEventListener("click", pizza.buildPizza);
document
  .querySelector("#shop-list")
  .addEventListener("click", pizza.shoppingList);

// ***********************************************************************************************
