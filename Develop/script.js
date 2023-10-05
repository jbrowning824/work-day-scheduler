// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  //example of removing a class
  //this will remove the past class and update the element with the present class
  $('#hour-9').removeClass('past').addClass('present');

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  // Example shows current day as name of day, name of month two digit day

});

function createTimeblocks(hour) {
  var defaultTimeblockClass = "row time-block";
  var defaultTextAreaClass = "col-2 col-md-1 hour text-center py-3";
  var defaultButtonClass = "btn saveBtn col-2 col-md-1";
  var defaultIClass = "fas fa-save"
  var container = $('container-fluid');
  var timeblockEl = $('<div></div>').addClass('row time-block').attr({ id: 'hour-'+hour.replace(/\D/g, '') });
  var hourblockEl = $('<div></div').addClass('col-2 col-md-1 hour text-center py-3').text(hour);
  var descriptionEl = $('<textarea></textarea>').addClass('col-8 col-md-10 description').attr({ rows: '3' });
  var btnEl = $('<button></button>').addClass('btn saveBtn col-2 col-md-1').attr({ 'aria-label': 'save' });
  var iconEl = $('<i></i>').addClass('fas fa-save').attr({ 'aria-hidden': 'true' });
}
