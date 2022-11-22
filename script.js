// Displays date and time in header

// get a new date (locale machine date time)
var date = new Date();
// get the date as a string
var n = date.toDateString();
// get the time as a string
var time = date.toLocaleTimeString();

// find the html element with the id of currentDay
// set the innerHTML of that element to the date a space the time
document.getElementById('currentDay').innerHTML = n + ' ' + time;

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));


// Colors time blocks based on past / present / future

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 9)) {
      setColor(row, "lightgrey");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}