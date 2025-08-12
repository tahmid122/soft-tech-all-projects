const resultPopup = document.getElementById("resultPopup");
const fullScreenResult = document.getElementById("fullScreenResult");
const resultImage = document.getElementById("resultImage");
const resultPopupImage = document.getElementById("resultPopupImage");
const resultBoardPlaceholder = document.getElementById(
  "resultBoardPlaceholder"
);
const resultPopupCloseBtn = document.getElementById("resultPopupCloseBtn");
fullScreenResult.addEventListener("click", () => {
  resultPopup.style.display = "flex";
});
resultPopupCloseBtn.addEventListener("click", () => {
  resultPopup.style.display = "none";
});

const handleResultShow = (img) => {
  resultBoardPlaceholder.style.display = "none";
  fullScreenResult.style.display = "block";
  resultImage.src = img;
  resultPopupImage.src = img;
  resultImage.style.display = "block";
  console.log(resultImage);
};
