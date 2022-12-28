// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
// HOW DO I DO THIS? WHAT DOES IT MEAN?


  // GLOBAL VARIABLES
var currentDayEl = $("#currentDay");
var timeBlocksEl = document.querySelectorAll(".time-block");
console.log(timeBlocksEl);
var descriptionEl = document.getElementsByClassName("description");
var saveBtnEl = document.getElementsByClassName("saveBtn").item(0);



//STEP 1 COMPLETED
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// TODO: Add code to display the current date in the header of the page.
function displayTime() {
  var todaysDate = dayjs().format("dddd, MMM DD, YYYY");
  currentDayEl.text(todaysDate);
}
displayTime();

// STEP 2 COMPLETED
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// STEP 3 COMPLETED
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// TODO: Add code to apply the past, present, or future class to each time 

for (let index = 0; index < timeBlocksEl.length; index++) {
  const timeBlock = timeBlocksEl[index];

  // turned the id class into a number only string for if statement
  var blockHour = timeBlock.getAttribute("id").substr(5, 6);
  console.log(blockHour);

  if (blockHour < dayjs().format("H")) {
    console.log("past");
    timeBlock.classList.add("past");
  } else if (blockHour == dayjs().format("H")) {
    console.log("present");
    timeBlock.classList.add("present");
  } else {
    console.log("future");
    timeBlock.classList.add("future");
  }
}


// TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

timeBlocksEl.item(0).addEventListener("click", function() {
  console.log(this.innerHTML)
});

// STEP 4
// WHEN I click into a timeblock
// THEN I can enter an event

// STEP 5
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?


// setting up the click function for the save button , storing the textarea description
$(document).ready(function() {
  $('.saveBtn').click(function() {
   
    // storing the time-block id so we can so we can pull it for local storage
    var timeBlockId = $(this).closest('.time-block').attr('id');

    // stores the text in local storage
    var text = $('#' + timeBlockId + ' textarea').val();
        localStorage.setItem(timeBlockId, text);
  });
}); 

// retrieving and setting the value of the textarea description for each time-block 
$(document).ready(function() {

  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');

    // getting the description to stay on the page - pulling it from local storage
    var storedText = localStorage.getItem(timeBlockId);
    $('#' + timeBlockId + ' textarea').val(storedText);
  });
});





