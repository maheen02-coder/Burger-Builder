let orders = JSON.parse(localStorage.getItem("orders")) || [];

let ordersDiv = document.getElementById("orders");


orders.forEach(function(order) {

  let orderBox = document.createElement("div");

  orderBox.className = "order_box";


  let ingredientsText = document.createElement("p");

  ingredientsText.innerHTML =
    "Ingredients: " +
    "<button>Bacon (" + order.bacon + ")</button>" +
    "<button>Cheese (" + order.cheese + ")</button>" +
    "<button>Lettuce (" + order.lettuce + ")</button>" +
    "<button>Meat (" + order.meat + ")</button>";


  let priceText = document.createElement("p");

  priceText.innerHTML =
    "Price USD <strong>" + order.price + "</strong>";


  orderBox.appendChild(ingredientsText);

  orderBox.appendChild(priceText);

  ordersDiv.appendChild(orderBox);

});