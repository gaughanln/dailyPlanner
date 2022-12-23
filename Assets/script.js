// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDayEl = $("#currentDay");
var timeBlocksEl = document.querySelectorAll(".time-block")
console.log(timeBlocksEl)
// today's date (edit variables)
// var currentDayEl = dayjs().format('MMM D, YYYY');
// $('#currentDay').text(currentDayEl);

function displayTime() {
  var todaysDate = dayjs().format('dddd, MMM DD, YYYY');
  currentDayEl.text(todaysDate);
}
displayTime();

$(function () {
  // TODO: Add a listener for click events on the save button. This code should

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // STEP 2
  // WHEN I scroll down
  // THEN I am presented with timeblocks for standard business hours
  // DO I NEED A TIME BLOCK FOR EACH HOUR - yes!
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // WILL NEED AN IF STATEMENT - WRITE A FOR LOOP INSIDE
  // const currentHour = new Date().getHours();
  // const timeBlocks = $("")
  // array of time-block

  for (let index = 0; index < timeBlocksEl.length; index++) {
    const timeBlock = timeBlocksEl[index];

    // turned the id class into a number only string for if statement
    var blockHour = timeBlock.getAttribute("id").substr(5, 6)
    console.log(blockHour)

    if (blockHour < dayjs().format("H")) {
      console.log("past")
      timeBlock.classList.add("past");
    }
    else if (blockHour == dayjs().format("H")) {
      console.log("present")
      timeBlock.classList.add("present");
    }
    else {
      console.log("future")
      timeBlock.classList.add("future");
    }
  }


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // REFERENCE JAVASCRIPT QUIZ FOR THIS
  // HOW DO WE RETRIEVE FROM LOCAL STORAGE ?

  //
  // TODO: Add code to display the current date in the header of the page.

});






//STEP 1
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// COMPLETED


// STEP 2
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// DO I NEED A TIME BLOCK FOR EACH HOUR?



// STEP 3
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


// STEP 4
// WHEN I click into a timeblock
// THEN I can enter an event


// STEP 4
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage



// STEP 5
// WHEN I refresh the page
// THEN the saved events persist