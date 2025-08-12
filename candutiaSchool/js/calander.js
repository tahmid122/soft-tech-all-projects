const calendarHeader = document.getElementById("calendarHeader");
const calendarDates = document.getElementById("calendarDates");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

calendarHeader.innerText = `${monthNames[month]} ${year}`;

const firstDayOfMonth = new Date(year, month, 1).getDay();
const totalDays = new Date(year, month + 1, 0).getDate();

// Add empty boxes before the first day
for (let i = 0; i < firstDayOfMonth; i++) {
  const empty = document.createElement("div");
  empty.classList.add("empty");
  calendarDates.appendChild(empty);
}

// Add days of the month
for (let day = 1; day <= totalDays; day++) {
  const date = document.createElement("div");
  if (
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear()
  ) {
    date.innerHTML = `<span class="today">${day}</span>`;
  } else {
    date.innerText = day;
  }
  calendarDates.appendChild(date);
}
