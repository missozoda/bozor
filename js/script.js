let elProduct = document.querySelector("#product");
let elAddBtn = document.querySelector(".add-btn");
let elProductList = document.querySelector(".product-list");
let products = [];

elAddBtn.addEventListener("click", function(e) {
  e.preventDefault();

  let productValue = elProduct.value.trim();
  // products.push(productValue);

  if (productValue == "" || productValue.length < 3 || productValue.length > 25 || !isNaN(productValue)) {
    elProduct.setAttribute( 'style', 'border-color: red !important');
    return 
  }

  products.push(productValue);
  
  elProduct.setAttribute( 'style', 'border-color: green !important');
  for(let product of products){
    newLi = document.createElement("li");
    newLi.textContent = product; 
    newLi.style.color = "green";

  }
  elProductList.append(newLi);
})
