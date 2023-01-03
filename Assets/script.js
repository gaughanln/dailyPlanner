// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

// GLOBAL VARIABLES
var currentDayEl = $("#currentDay");
var timeBlocksEl = document.querySelectorAll(".time-block");
console.log(timeBlocksEl);
var descriptionEl = document.getElementsByClassName("description");
var saveBtnEl = document.getElementsByClassName("saveBtn").item(0);

//STEP 1
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// TODO: Add code to display the current date in the header of the page.
function displayTime() {
  var todaysDate = dayjs().format("dddd, MMM DD, YYYY");
  currentDayEl.text(todaysDate);
}
displayTime();

// STEP 2
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// STEP 3
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

// TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.

timeBlocksEl.item(0).addEventListener("click", function () {
  console.log(this.innerHTML);
});

// STEP 4
// WHEN I click into a timeblock
// THEN I can enter an event

// STEP 5
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.

// setting up the click function for the save button & storing the textarea description
$(document).ready(function () {
  $(".saveBtn").click(function () {
    // storing the time-block id so we can so we can pull it for local storage. calling the parent because .saveBtn is the child/sibling
    var timeBlockId = $(this).parent().attr("id");

    // we are pulling the sibling (text area / description)
    var text = $(this).siblings("textarea").val();
    // key is timeBlockID and value is text
    localStorage.setItem(timeBlockId, text);
  });
});

// retrieving the value of the textarea from local storage adds it back to the website when refreshed
$(document).ready(function () {
  // for each time block, this function will call back the text from the storage
  $(".time-block").each(function () {
    // not calling the parent because .time-block IS the parent
    var timeBlockId = $(this).attr("id");

    // getting the textarea/description to stay on the page - pulling it from local storage
    var storedText = localStorage.getItem(timeBlockId);
    $(this).children("textarea").val(storedText);
  });
});
