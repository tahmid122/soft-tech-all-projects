const noticePopup = document.getElementById("noticePopup");
const noticeBtn = document.getElementById("noticeShowBtn");
const noticePopupCloseBtn = document.getElementById("noticePopupCloseBtn");
noticeBtn.addEventListener("click", () => {
  noticePopup.style.display = "flex";
});
noticePopupCloseBtn.addEventListener("click", () => {
  noticePopup.style.display = "none";
});
