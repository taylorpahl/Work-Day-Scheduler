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
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 12)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 12)) {
      setColor(row, "lightgrey");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

// get textarea value based on button ID and return value
function getText(x) {
  console.log(x)
  let result;
  if (x === 'button8') {
    result = $('#text8').val();
  }
  else if (x === 'button9') {
    result = $('#text9').val();
  }
  else if (x === 'button10') {
    result = $('#text10').val();
  }
  else if (x === 'button11') {
    result = $('#text11').val();
  }
  else if (x === 'button12') {
    result = $('#text12').val();
  }
  else if (x === 'button1') {
    result = $('#text1').val();
  }
  else if (x === 'button2') {
    result = $('#text2').val();
  }
  else if (x === 'button3') {
    result = $('#text3').val();
  }
  else if (x === 'button4') {
    result = $('#text4').val();
  }
  else if (x === 'button5') {
    result = $('#text5').val();
  }
  return result;
}

// when button is clicked, get value of related textarea and save it in storage
$('button').click(function(e){
  let buttonId = $(this).attr('id');
  let text = getText(buttonId);
  localStorage.setItem(buttonId, text);
})

// get values of any timeblocks stored locally and set the textarea to the value
let b8 = localStorage.getItem('button8');
$('#text8').val(b8);
let b9 = localStorage.getItem('button9');
$('#text9').val(b9);
let b10 = localStorage.getItem('button10');
$('#text10').val(b10);
let b11 = localStorage.getItem('button11');
$('#text11').val(b11);
let b12 = localStorage.getItem('button12');
$('#text12').val(b12);
let b1 = localStorage.getItem('button1');
$('#text1').val(b1);
let b2 = localStorage.getItem('button2');
$('#text2').val(b2);
let b3 = localStorage.getItem('button3');
$('#text3').val(b3);
let b4 = localStorage.getItem('button4');
$('#text4').val(b4);
let b5 = localStorage.getItem('button5');
$('#text5').val(b5);

