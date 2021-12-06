var tasks = {};

//gets date for header
var m = moment();
var today = document.querySelector("#currentDay");
today.textContent = m.format("llll");

var time = moment().format("h");
var currTime = [9, 10, 11, 12, 1, 2, 3, 4, 5];

if (moment().isAfter(time)) {
  $(".userInput").addClass("future");
} else if (moment().isBefore(time)) {
  $(".userInput").addClass("past");
} else if (moment().isSame(time)) {
  $(".userInput").addClass("present");
}

var loadTasks = function () {
  $("#taskText1").val(localStorage.getItem("taskEl1"));
  $("#taskText2").val(localStorage.getItem("taskEl2"));
  $("#taskText3").val(localStorage.getItem("taskEl3"));
  $("#taskText4").val(localStorage.getItem("taskEl4"));
  $("#taskText5").val(localStorage.getItem("taskEl5"));
  $("#taskText6").val(localStorage.getItem("taskEl6"));
  $("#taskText7").val(localStorage.getItem("taskEl7"));
  $("#taskText8").val(localStorage.getItem("taskEl8"));
  $("#taskText9").val(localStorage.getItem("taskEl9"));
};

$("#btn-1").click(function () {
  // get form values
  var taskText = $("#taskText1").val();
  localStorage.setItem("taskEl1", taskText);
  var local = localStorage.getItem("taskEl1");
  console.log(local);
});
$("#btn-2").click(function () {
  // get form values
  var taskText = $("#taskText2").val();
  localStorage.setItem("taskEl2", taskText);
  var local = localStorage.getItem("taskEl2");
  console.log(local);
});
$("#btn-3").click(function () {
  // get form values
  var taskText = $("#taskText3").val();
  localStorage.setItem("taskEl3", taskText);
  var local = localStorage.getItem("taskEl3");
  console.log(local);
});
$("#btn-4").click(function () {
  // get form values
  var taskText = $("#taskText4").val();
  localStorage.setItem("taskEl4", taskText);
  var local = localStorage.getItem("taskEl4");
  console.log(local);
});
$("#btn-5").click(function () {
  // get form values
  var taskText = $("#taskText5").val();
  localStorage.setItem("taskEl5", taskText);
  var local = localStorage.getItem("taskEl5");
  console.log(local);
});
$("#btn-6").click(function () {
  // get form values
  var taskText = $("#taskText6").val();
  localStorage.setItem("taskEl6", taskText);
  var local = localStorage.getItem("taskEl6");
  console.log(local);
});
$("#btn-7").click(function () {
  // get form values
  var taskText = $("#taskText7").val();
  localStorage.setItem("taskEl7", taskText);
  var local = localStorage.getItem("taskEl7");
  console.log(local);
});
$("#btn-8").click(function () {
  // get form values
  var taskText = $("#taskText8").val();
  localStorage.setItem("taskEl8", taskText);
  var local = localStorage.getItem("taskEl8");
  console.log(local);
});
$("#btn-9").click(function () {
  // get form values
  var taskText = $("#taskText9").val();
  localStorage.setItem("taskEl9", taskText);
  var local = localStorage.getItem("taskEl9");
  console.log(local);
});
loadTasks();
