const items = [
  {
    type: "burger",
    category: "Burger ",
    image:
      "https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg",
    title: "Beef Burger",
    description:
      "No grill, no problemo! Here's how to make an incredible burger indoors on the stove. An optional quick seasoning mix takes it to the next level",
    CartButton: "Add To Cart",
    id: 1,
  },

  {
    type: "coffee",
    category: "Coffee",
    image:
      "https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x375.png",
    title: "beef Coffee",
    description:
      "No grill, no problemo! Here's how to make an incredible burger indoors on the stove. An optional quick seasoning mix takes it to the next level",
    CartButton: "Add To Cart",
    id: 1,
  },

  {
    type: "burger",
    category: "Burger ",
    image:
      "https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg",
    title: "Chicken Burger",
    description:
      "No grill, no problemo! Here's how to make an incredible burger indoors on the stove. An optional quick seasoning mix takes it to the next level",
    CartButton: "Add To Cart",
    id: 1,
  },
  {
    type: "coffee",
    category: "Coffee ",
    image:
      "https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x375.png",
    title: "Cold Coffee",
    description:
      "No grill, no problemo! Here's how to make an incredible burger indoors on the stove. An optional quick seasoning mix takes it to the next level",
    CartButton: "Add To Cart",
    id: 1,
  },
];

function showFood(food) {
  return ` <div class="item col-md-6 col-lg-4 p-3" data-category="coffee">
  <div class="card">
    <div class="img-container">
      <img src="${food.image}" alt="Coffee" />
      <span class="category-pill">${food.category}</span>
    </div>
    <div class="card-body">
      <h5 class="card-title">${food.title}</h5>
      <p class="card-text">${food.description}</p>
  
  
      <button class="addToCartBtn btn w-100">${food.CartButton}</button>
    </div>
  </div>
  </div>
  `;
}

var allitems = document.querySelector("#iits-items");
var searchFrom = document.querySelector("#searchForm");
var searchVal = document.querySelector("#iits-searchBox");
var carttext = document.getElementById("iits-cart_counter");
var minusbtn = document.getElementById("cart_dec");
const allToggleBtn = document.getElementById("all_toggle");
const coffeeToggleBtn = document.getElementById("coffee_toggle");
const burgerToggleBtn = document.getElementById("burger_toggle");
var adminBtn = document.getElementById("iits-adminBtn");
var additemform = document.getElementById("iits-adminSection");
var cancelBtn = document.getElementById("iits-cancelBtn");
const addNewItemForm = document.getElementById("iits-addNewForm");
const title = document.querySelector("#name");
const image = document.querySelector("#pic");
const description = document.querySelector("#desc");
const type = document.querySelector("#typeItem");
let searchValLocal = "";

//Render all item to the dom and also filter item for search

// updated render function

function renderitems(elements) {
  allitems.innerHTML = "";
  elements.map(function (food) {
    if (food.title.toLowerCase().includes(searchValLocal.toLowerCase())) {
      allitems.innerHTML += showFood(food);
    }
  });
  if (allitems.innerHTML == "")
    allitems.innerHTML = `<span class="bg-danger text-white py-2 rounded">Nothing Found</span>`;
  increment();
}

// Search functionality

searchFrom.addEventListener("submit", function (e) {
  e.preventDefault();
  searchValLocal = searchVal.value;
  const updatedData = items.filter((item) =>
    item.title.toLowerCase().includes(searchValLocal)
  );

  renderitems(updatedData);
});

// initial rendering call
renderitems(items);

// Add click event listeners to the filter radio buttons
allToggleBtn.addEventListener("click", handleCategoryToggle);
coffeeToggleBtn.addEventListener("click", handleCategoryToggle);
burgerToggleBtn.addEventListener("click", handleCategoryToggle);

// Function to handle item filtering based on selected category
function handleCategoryToggle(e) {
  const selectedCategory = e.target.value;

  console.log(selectedCategory);

  let filteredItems = [];

  if (selectedCategory === "all") {
    filteredItems = [...items];
  } else {
    filteredItems = items.filter(function (item) {
      return item.type === selectedCategory;
    });
  }

  renderitems(filteredItems);
}

//increment
function increment() {
  let addToCart = document.querySelectorAll(".addToCartBtn");
  addToCart.forEach(function (btn) {
    btn.addEventListener("click", function () {
      carttext.textContent = parseInt(carttext.textContent) + 1;
    });
  });
}
// cart text decrement

minusbtn.addEventListener("click", function () {
  if (parseInt(carttext.textContent) > 0) {
    carttext.textContent = parseInt(carttext.textContent) - 1;
  }
});

//admin form show
function hideForm() {
  additemform.style.display = "none";
}

hideForm();

adminBtn.addEventListener("click", formhandling);

function formhandling() {
  var enteredUsername = prompt("Please Enter Your Username : ");
  var enteredPassword = prompt("Please Enter Your Password : ");

  var correctUsername = "iits";
  var correctpassword = "23";

  if (
    enteredUsername == correctUsername &&
    enteredPassword == correctpassword
  ) {
    additemform.style.display = "block";
  } else {
    alert("You Entered wrong Information.Please Try again");
  }
}
cancelBtn.addEventListener("click", function () {
  additemform.style.display = "none";
});

//Add new item

addNewItemForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let lastObj = items[items.length - 1];
  let lastId = 0;
  if (lastObj != undefined) {
    let lastId = lastObj.id;
  }

  let newObj = {
    type: type.value,
    category: type.value,
    image: image.value,
    title: title.value,
    description: description.value,
    id: lastId + 1,
    CartButton: "Add to Cart",
  };

  //Check Wheather every feilds is fill up or not

  if (
    type.value === "" ||
    image.value === "" ||
    title.value === "" ||
    description.value === ""
  ) {
    alert(" Please Fill Up Every Feilds");
  }

  //If yes then item will be added
  else {
    items.push(newObj);
    renderitems(items);
    clearForm();
    hideForm();
    newObj = "";
  }
});

function clearForm() {
  description.value = "";
  title.value = "";
  image.value = "";
  type.value = "";
}
