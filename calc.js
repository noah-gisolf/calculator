//Set variables and set their default values
var operator = "";
var start = null;
var finish = null;

//Create a function to add buttons on the numpad
function addNumber(i) {
  var screen = document.getElementsByClassName('screen')[0];
  screen.innerHTML = screen.innerHTML + i;
  finish = screen.innerHTML;
}

//Create a function to add operators to the calculation
function addOperator(stuff) {
  var screen = document.getElementsByClassName('screen') [0];
  operator = stuff;
  screen.innerHTML = "";

  if (start != null) {
    if (operator ==="+") {
      start = Number(start) + Number(finish);
    }
    if (operator ==="-") {
      start = Number(start) - Number(finish);
    }
    if (operator ==="*") {
      start = Number(start) * Number(finish);
    }
    if (operator ==="/") {
      start = Number(start) / Number(finish);
    }
  } else {
    start = finish;
  }
}

//Calculate the answer
function calculate() {
  var screen = document.getElementsByClassName('screen')[0];
  screen.innerHTML = "";

  if (operator === "+") {
    screen.innerHTML = (Number(start) + Number(finish)).toFixed(5);
  }
  if (operator === "-") {
    screen.innerHTML = Number(start) - Number(finish);
  }
  if (operator === "*") {
    screen.innerHTML = Number(start) * Number(finish);
  }
  if (operator === "/") {
    screen.innerHTML = Number(start) / Number(finish);
  }
}

//Reset all variables to their default state
function reset() {
  var screen = document.getElementsByClassName('screen')[0];
  screen.innerHTML = "";

  operator = "";
  start = null;
  finish = null;
}