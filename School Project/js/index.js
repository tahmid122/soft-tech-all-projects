const bars = document.getElementById("bars");
const navBar = document.getElementById("navBar");
let isTrue = false;

bars.addEventListener("click", () => {
  isTrue = !isTrue;
  if (isTrue) {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "flex";
  }
});
