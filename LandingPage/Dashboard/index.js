const editProfile = document.getElementById("editProfile");
const totalOrders = document.getElementById("totalOrders");
const newOrders = document.getElementById("newOrders");
const completedOrders = document.getElementById("completedOrders");
const shippedOrders = document.getElementById("shippedOrders");
const cancelledOrders = document.getElementById("cancelledOrders");
const returnOrders = document.getElementById("returnOrders");
const addProduct = document.getElementById("addProduct");
const allProducts = document.getElementById("allProducts");
const dashboard = document.getElementById("dashboard");

const showContent = (id) => {
  editProfile.style.display = "none";
  totalOrders.style.display = "none";
  newOrders.style.display = "none";
  completedOrders.style.display = "none";
  shippedOrders.style.display = "none";
  cancelledOrders.style.display = "none";
  returnOrders.style.display = "none";
  addProduct.style.display = "none";
  allProducts.style.display = "none";
  dashboard.style.display = "none";
  switch (id) {
    case "editProfile":
      editProfile.style.display = "flex";
      break;
    case "totalOrders":
      totalOrders.style.display = "block";
      break;
    case "newOrders":
      newOrders.style.display = "block";
      break;
    case "completedOrders":
      completedOrders.style.display = "block";
      break;
    case "shippedOrders":
      shippedOrders.style.display = "block";
      break;
    case "cancelledOrders":
      cancelledOrders.style.display = "block";
      break;
    case "returnOrders":
      returnOrders.style.display = "block";
      break;
    case "addProduct":
      addProduct.style.display = "block";
      break;
    case "allProducts":
      allProducts.style.display = "grid";
      break;
    case "dashboard":
      dashboard.style.display = "grid";
      break;
    default:
      dashboard.style.display = "grid";
  }
};

// active effect on nav link
const navLinks = document.querySelectorAll(".navLink");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");
  });
});
