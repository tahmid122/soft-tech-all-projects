const dateContainer = document.getElementById("date");
const timeContainer = document.getElementById("time");
const changeDateAndTime = () => {
  const date = new Date().toLocaleString().split(",");
  dateContainer.innerText = `Date: ${date[0]}`;
  timeContainer.innerText = `Time: ${date[1]}`;
};

setInterval(changeDateAndTime, 1000);
