// menu
const hamburger = document.getElementById("hamburger");
const closeMark = document.getElementById("closeMark");
const navLinks = document.getElementById("navLinks");
const navlink = document.querySelectorAll(".navLink");
closeMark.style.display = "none";
hamburger.addEventListener("click", () => {
  navLinks.classList.replace("hidden", "flex");
  hamburger.style.display = "none";
  closeMark.style.display = "block";
});

closeMark.addEventListener("click", () => {
  navLinks.classList.replace("flex", "hidden");
  hamburger.style.display = "block";
  closeMark.style.display = "none";
});
navlink.forEach((li) =>
  li.addEventListener("click", () => {
    navLinks.classList.replace("flex", "hidden");
    hamburger.style.display = "block";
    closeMark.style.display = "none";
  })
);
// menu

// add to cart
let quantity = 1;
let cartArray = [];
const cartBody = document.getElementById("cartBody");
const cartCount = document.getElementById("cartCount");
if (cartArray.length == 0) {
  cartBody.innerHTML = `<tr class="p-2"><td>No Item to show</td><tr/>`;
}
const addToCart = (product) => {
  cartArray.push(product);
  console.log(cartArray);
  cartCount.innerText = `(${cartArray.length})`;
  handleCart();
};
const handleCart = () => {
  cartBody.innerHTML = "";
  cartArray?.forEach((cart) => {
    cartBody.innerHTML += `<tr>
                  <td>${cart.name}</td>
                  <td>${cart.price}</td>
                  <td class="flex items-center gap-1">
                    <span onclick="handleQuantity('minus', ${
                      cart.id
                    })" class="text-lg"
                      ><i class="fa-solid fa-minus cursor-pointer"></i></span
                    ><span
                      class="text-lg border border-slate-300 w-10 flex items-center justify-center"
                      >${cart.quantity}</span
                    ><span onclick="handleQuantity('plus',${cart.id})"
                      ><i class="fa-solid fa-plus cursor-pointer"></i
                    ></span>
                  </td>
                  <td>${cart.price * cart.quantity}</td>
                  <td>
                    <i
                      onClick="removeFromCart(${cart.id})"
                      class="fa-solid fa-xmark cursor-pointer text-red-500 text-lg"
                    ></i>
                  </td>
                </tr>`;
  });
  calculate();
};
const removeFromCart = (id) => {
  const filteredArray = cartArray.filter((item) => item.id !== id);
  cartArray = filteredArray;
  console.log(cartArray);
  cartCount.innerText = `(${cartArray.length})`;
  handleCart();
  calculate();
};
// handle quantity
const handleQuantity = (action, id) => {
  const product = cartArray.find((cart) => cart.id == id);
  if (product) {
    if (action === "minus") {
      if (product.quantity <= 1) {
        alert("Your quantity must be greater than 1");
      } else {
        product.quantity -= 1;
      }
      handleCart();
    } else if (action === "plus") {
      product.quantity += 1;
      handleCart();
    }
  }
  calculate();
  console.log(cartArray);
};
// add to cart
// get location
const chargeField = document.getElementById("chargeField");
let charged = 0;
let address = "";
const getLocation = (value) => {
  address = value;
  if (address === "outside") {
    charged = 120;
    chargeField.innerHTML = 120;
  } else {
    charged = 60;
    chargeField.innerHTML = 60;
  }
  calculate();
};
const allProSubtotal = document.getElementById("allProSubtotal");
const allProQuantity = document.getElementById("allProQuantity");

const payable = document.getElementById("payable");
// let total = 0;
const calculate = () => {
  allProQuantity.innerText = 0;
  allProSubtotal.innerText = 0;
  payable.innerText = 0;
  if (cartArray.length > 0) {
    const total = cartArray.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    allProQuantity.innerText = cartArray.length;
    allProSubtotal.innerText = total;
    payable.innerText = total + charged;
  }
};
