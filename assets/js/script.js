var tasks = {};

var m = moment();
var today = document.querySelector("#currentDay");
today.textContent = m.format("llll");

var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
