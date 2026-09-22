let ingredients = [];
let CurrentPrice = 50;
let Lettuce_Price = 10;
let BaconPrice = 15;
let CheesePrice = 20;
let MeatPrice = 30;
function add_lettuce() {
  ingredients.push({
    name: "Lettuce",
    price: Lettuce_Price
  });
  let doubling = document.createElement("p");
  doubling.style.backgroundColor = "#55AA34";
  doubling.style.padding = "20px";
  doubling.style.margin = "5px auto";
  doubling.style.width = "calc(90% - 40px)";
  doubling.style.borderRadius = "15px";
  doubling.style.boxSizing = "border-box";
  lettuce.appendChild(doubling);
  message.style.display = "none";
  CurrentPrice = CurrentPrice + Lettuce_Price;
  document.getElementById("price").innerText =
    CurrentPrice.toFixed(2);
  console.log(ingredients);
  let btn_upg = document.getElementById("less_id");
  btn_upg.style.backgroundColor = "#af733a";
  btn_upg.style.color = "white";
  btn_upg.style.border = "none";
  btn_upg.style.cursor = "auto";
}
function less_lettuce() {
  let index = ingredients.findIndex(function(item) {
    return item.name === "Lettuce";
  });
  if (index === -1) {
    return;
  }
  ingredients.splice(index, 1);
  if (lettuce.lastElementChild) {
    lettuce.removeChild(lettuce.lastElementChild);
  }
  CurrentPrice = CurrentPrice - Lettuce_Price;
  document.getElementById("price").innerText =
    CurrentPrice.toFixed(2);
  console.log(ingredients);
}
function add_bacon() {
  ingredients.push({
    name: "Bacon",
    price: BaconPrice
  });
  let doubling = document.createElement("p");
  doubling.style.padding = "10px";
  doubling.style.margin = "5px auto";
  doubling.style.width = "calc(90% - 20px)";
  doubling.style.backgroundColor = "#C04520";
  doubling.style.boxSizing = "border-box";
  bacon.appendChild(doubling);
  message.style.display = "none";
  CurrentPrice = CurrentPrice + BaconPrice;
  document.getElementById("price").innerText =
    CurrentPrice.toFixed(2);
  console.log(ingredients);
  let btn_upg = document.getElementById("btn_less_bacon");
  btn_upg.style.backgroundColor = "#af733a";
  btn_upg.style.color = "white";
  btn_upg.style.border = "none";
 btn_upg.style.cursor = "auto";
}
function less_bacon() {
  let index = ingredients.findIndex(function(item) {
    return item.name === "Bacon";
  });
  if (index === -1) {
    return;
  }
  ingredients.splice(index, 1);
  if (bacon.lastElementChild) {
    bacon.removeChild(bacon.lastElementChild);
  }
  CurrentPrice = CurrentPrice - BaconPrice;
  document.getElementById("price").innerText =
    CurrentPrice.toFixed(2);
}
function add_cheese() {
  ingredients.push({
    name: "Cheese",
    price: CheesePrice
  });
  let doubling = document.createElement("p");
  doubling.style.padding = "15px";
  doubling.style.margin = "5px auto";
  doubling.style.width = "calc(90% - 30px)";
  doubling.style.borderRadius = "25px";
  doubling.style.backgroundColor = "rgb(229, 197, 19)";
  doubling.style.boxSizing = "border-box";
  Cheese.appendChild(doubling);
  message.style.display = "none";
  CurrentPrice = CurrentPrice + CheesePrice;
  document.getElementById("price").innerText =
    CurrentPrice.toFixed(2);
  console.log(ingredients);
  let btn_upg = document.getElementById("btn_less_cheese");
  btn_upg.style.backgroundColor = "#af733a";
  btn_upg.style.color = "white";
  btn_upg.style.border = "none";
  btn_upg.style.cursor = "auto";
}
function less_cheese() {
  let index = ingredients.findIndex(function(item) {
    return item.name === "Cheese";
  });
  if (index === -1) {
    return;
  }
  ingredients.splice(index, 1);
  if (Cheese.lastElementChild) {
    Cheese.removeChild(Cheese.lastElementChild);
  }
  CurrentPrice = CurrentPrice - CheesePrice;
  document.getElementById("price").innerText =
    CurrentPrice.toFixed(2);
}
function add_meat() {
  ingredients.push({
    name: "Meat",
    price: MeatPrice
  });
  let doubling = document.createElement("p");
  doubling.style.padding = "30px";
  doubling.style.margin = "5px auto";
  doubling.style.width = "calc(90% - 60px)";
  doubling.style.borderRadius = "25px";
  doubling.style.backgroundColor = "#7b3407";
  doubling.style.boxSizing = "border-box";
  Meat.appendChild(doubling);
  message.style.display = "none";
  CurrentPrice = CurrentPrice + MeatPrice;
  document.getElementById("price").innerText =
    CurrentPrice.toFixed(2);
  console.log(ingredients);
  let btn_upg = document.getElementById("btn_less_meat");
  btn_upg.style.backgroundColor = "#af733a";
  btn_upg.style.color = "white";
  btn_upg.style.border = "none";
  btn_upg.style.cursor = "auto";
}
function less_meat() {
  let index = ingredients.findIndex(function(item) {
    return item.name === "Meat";
  });
  if (index === -1) {
    return;
  }
  ingredients.splice(index, 1);
  if (Meat.lastElementChild) {
    Meat.removeChild(Meat.lastElementChild);
  }
  CurrentPrice = CurrentPrice - MeatPrice;
  document.getElementById("price").innerText =
    CurrentPrice.toFixed(2);
}
function saveOrder() {
  let lettuceQuantity = ingredients.filter(function(item) {
    return item.name === "Lettuce";
  }).length;
  let baconQuantity = ingredients.filter(function(item) {
    return item.name === "Bacon";
  }).length;
  let cheeseQuantity = ingredients.filter(function(item) {
    return item.name === "Cheese";
  }).length;
  let meatQuantity = ingredients.filter(function(item) {
    return item.name === "Meat";
  }).length;
  let newOrder = {
    bacon: baconQuantity,
    cheese: cheeseQuantity,
    lettuce: lettuceQuantity,
    meat: meatQuantity,
    price: CurrentPrice.toFixed(2)
  };
  let oldOrders =
    JSON.parse(localStorage.getItem("orders")) || [];
  oldOrders.push(newOrder);
  localStorage.setItem(
    "orders",
    JSON.stringify(oldOrders)
  );
  console.log("Order Saved:", newOrder);
}