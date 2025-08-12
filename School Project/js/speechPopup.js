const speechPopup = document.getElementById("speechPopup");
const speechPopupCloseBtn = document.getElementById("speechPopupCloseBtn");
const speechTitle = document.getElementById("speechTitle");
const speechDescription = document.getElementById("speechDescription");

const handleSpeech = (role, speech) => {
  speechPopup.style.display = "flex";
  speechTitle.innerText = role;
  speechDescription.innerText = speech;
};
speechPopupCloseBtn.addEventListener("click", () => {
  speechPopup.style.display = "none";
});
