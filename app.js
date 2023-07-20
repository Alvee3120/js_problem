// Your solution goes here
// API -> https://64b2e33138e74e386d55b072.mockapi.io/api/hanover

// cart counter

var count = document.getElementById("iits-cart_counter");
var cartinc = document.querySelectorAll(".addToCartBtn");
var cartdec = document.getElementById("cart_dec");
var allitems = document.getElementById("iits-items");

for (let i = 0; i < cartinc.length; i++) {
  cartinc.addEventListener("click", function () {
    count.textContent = parseInt(count.textContent) + 1;
  });
}

cartdec.addEventListener("click", function () {
  if (parseInt(count.textContent) > 0) {
    count.textContent = parseInt(count.textContent) - 1;
  }
});

const items = [
  {
    DataCategory: "burger",
    image:
      "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg",
    CategoryPill: "burger",
    title: "Ultimate Veggie Burgers",
    description:
      "These veggie burgers hit every satisfying, savory note with a hearty mix of pearl barley, chickpeas, mushrooms, and crispy panko. For the sturdiest patties, evenly distribute the panko by stirring the patty mixture until very well-combined.",
    id: 1,
    cart: "Add to Cart",
  },
  {
    DataCategory: "coffee",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg",
    CategoryPill: "coffee",
    title: "Hot coffee",
    description:
      "These veggie burgers hit every satisfying, savory note with a hearty mix of pearl barley, chickpeas, mushrooms, and crispy panko. For the sturdiest patties, evenly distribute the panko by stirring the patty mixture until very well-combined.",
    id: 2,
    cart: "Add to Cart",
  },
  {
    DataCategory: "coffee",
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2021/04/Chocolate-Cold-Coffee-2-3.jpg",
    CategoryPill: "coffee",
    title: "Chocolate Cold Coffee Recipe",
    description:
      "These veggie burgers hit every satisfying, savory note with a hearty mix of pearl barley, chickpeas, mushrooms, and crispy panko. For the sturdiest patties, evenly distribute the panko by stirring the patty mixture until very well-combined.",
    cart: "Add to Cart",
    id: 3,
  },
];

function showItems(item) {
  return `<div class="item col-md-6 col-lg-4 p-3" data-category="${item.DataCategory}">
                    <div class="card">
                      <div class="img-container">
                        <img src="${item.image}" />
                        <span class="category-pill">${item.CategoryPill}</span>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <button class="addToCartBtn btn w-100">${item.cart}</button>
                      </div>
                    </div>
                  </div>
                  `;
}
function renderitems() {
  allitems.innerHTML = "";
  items.map(function (item) {
    allitems.innerHTML = allitems.innerHTML + showItems(item);
  });
}

renderitems();
