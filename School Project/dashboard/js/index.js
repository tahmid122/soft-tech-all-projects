const dashboard = document.getElementById("dashboard");
const institutionUpdate = document.getElementById("institutionUpdate");
const latestNotice = document.getElementById("latestNotice");
const result = document.getElementById("result");
const teacherStudent = document.getElementById("teacherStudent");
const mapUpdate = document.getElementById("mapUpdate");
const principleSpeech = document.getElementById("principleSpeech");
const presidentSpeech = document.getElementById("presidentSpeech");
const socialMedia = document.getElementById("socialMedia");
const addStudent = document.getElementById("addStudent");
const addTeacher = document.getElementById("addTeacher");

const showContent = (id) => {
  dashboard.style.display = "none";
  institutionUpdate.style.display = "none";
  latestNotice.style.display = "none";
  result.style.display = "none";
  teacherStudent.style.display = "none";
  mapUpdate.style.display = "none";
  principleSpeech.style.display = "none";
  presidentSpeech.style.display = "none";
  socialMedia.style.display = "none";
  addTeacher.style.display = "none";
  addStudent.style.display = "none";
  if (id === "dashboard") {
    dashboard.style.display = "grid";
  } else if (id === "institutionUpdate") {
    institutionUpdate.style.display = "block";
  } else if (id === "latestNotice") {
    latestNotice.style.display = "block";
  } else if (id === "result") {
    result.style.display = "block";
  } else if (id === "teacherStudent") {
    teacherStudent.style.display = "block";
  } else if (id === "mapUpdate") {
    mapUpdate.style.display = "block";
  } else if (id === "principleSpeech") {
    principleSpeech.style.display = "block";
  } else if (id === "presidentSpeech") {
    presidentSpeech.style.display = "block";
  } else if (id === "socialMedia") {
    socialMedia.style.display = "block";
  } else if (id === "addStudent") {
    addStudent.style.display = "block";
  } else if (id === "addTeacher") {
    addTeacher.style.display = "block";
  } else {
    dashboard.style.display = "block";
  }
};

// menu items active toggle
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    menuItems.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");
  });
});
