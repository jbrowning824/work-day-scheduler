// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

  for(i = 9; i <= 17; i++){
  createTimeblocks(i);
  }


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('.saveBtn').click(function() {
    var hourId = $(this).parent().attr('id');
    console.log(hourId);
    var userText = $(this).siblings('.description');
    console.log(userText);
    localStorage.setItem(hourId, userText.val());
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('-')[1]); 
    var currentHour = dayjs().hour(); 

    if (blockHour < currentHour) {
        $(this).addClass('past');
    } else if (blockHour === currentHour) {
        $(this).addClass('present');
    } else {
        $(this).addClass('future');
    }
});
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $('.time-block').each(function() {
    var hourId = $(this).attr('id');
    var savedText = localStorage.getItem(hourId);
    if (savedText) {
        $(this).find('.description').val(savedText);
    }
});
  // TODO: Add code to display the current date in the header of the page.
  // Example shows current day as name of day, name of month two digit day
  //
  $('#currentDay').text(dayjs().format('dddd, MMMM DD'));
});

function createTimeblocks(hour) {
  console.log(hour);
  let date = new Date();
  date.setHours(hour, 0, 0, 0);

  var container = $('.container-fluid');
  var timeblockEl = $('<div></div>').addClass('row time-block').attr({ id: 'hour-' + hour });
  var hourblockEl = $('<div></div>').addClass('col-2 col-md-1 hour text-center py-3').text(dayjs(date).format("h:mm A"));
  var descriptionEl = $('<textarea></textarea>').addClass('col-8 col-md-10 description').attr({ rows: '3' });
  var btnEl = $('<button></button>').addClass('btn saveBtn col-2 col-md-1').attr({ 'aria-label': 'save' });
  var iconEl = $('<i></i>').addClass('fas fa-save').attr({ 'aria-hidden': 'true' });

  btnEl.append(iconEl);
  timeblockEl.append(hourblockEl, descriptionEl, btnEl);
  container.append(timeblockEl);
}

