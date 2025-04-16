let itemInput = document.querySelector("#item");
let priceInput = document.querySelector("#price");
let itemList = document.querySelector("#ul");

let prices = []; // Store all prices

function add() {
  if (itemInput.value === "" || priceInput.value === "") {
    alert("Please enter both item name and price.");
    return;
  }

  // Add price to array
  let price = parseFloat(priceInput.value);
  prices.push(price);

  // Add item to list
  let li = document.createElement("li");
  li.innerHTML = `
  ${itemInput.value}
  <span class="price">${price}</span>
  <span>
    <button onclick="edit(this)"><i class="fas fa-pen"></i></button>
    <button onclick="del(this)"><i class="fas fa-trash"></i></button>
  </span>
  `;
  itemList.appendChild(li);

  // Clear inputs
  itemInput.value = "";
  priceInput.value = "";
}

function del(btn) {
  // Get the <li> element
  let li = btn.parentElement.parentElement;

  // Get the price from the <span class="price">
  let price = parseFloat(li.querySelector(".price").textContent);

  // Remove the price from the array
  let index = prices.indexOf(price);
  if (index !== -1) {
    prices.splice(index, 1);
  }

  // Remove the item from the UI
  li.remove();

  // Optional: update total immediately in console (or on screen)
  total();
}


function total() {
  let total = prices.reduce((sum, val) => sum + val, 0);
  
  console.log("Total:", total);
}
