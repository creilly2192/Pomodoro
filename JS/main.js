//global variables
var breakTimeInverval;
var timerInterval;
var seconds;
var sessionTime;
var number;
var sound;


//Subtract time from Break session
$('#subBreak').click(function(){
  number = $('#breakTime').text();
  if(number > 0) {
    number -= 1;
    $('#breakTime').html(number);
  }
});

//Add time to Break session
$('#addBreak').click(function(){
  number = $('#breakTime').text();
  number = parseInt(number) + 1;
  $('#breakTime').html(number);
});

//Subtract time from Session length
$('#subSession').click(function(){
  number = $('#sessionTime').text();
  if(number > 0) {
    number -= 1;
    $('#sessionTime').html(number);
    if(number < 10) {
      $('#minutes').html('0' + number);
    }else{
      $('#minutes').html(number);
    }
  }
});

//Add time to Session length
$('#addSession').click(function(){
  number = $('#sessionTime').text();
  number = parseInt(number) + 1;
  $('#sessionTime').html(number);
  if(number < 10){
    $('#minutes').html('0' + number);
  }else{
    $('#minutes').html(number);
  }
});

//when start button is clicked the timer begins
$('.start').click(function(){
  countdown();
  $('.reset').css('display', 'inline-block');
});

//pause countdown when stop is clicked
$('.stop').click(function(){
  clearInterval(timerInterval);
});


//reset countdown to time set when reset is clicked
$('.reset').click(function(){
  clearInterval(timerInterval);

  $('#seconds').text('00');
  $('#minutes').text(sessionTime);
});


//Create audio varibale and and play when function is called
sound = new Audio('audience.mp3');

  function clap() {
    sound.play();
  }



//The timer function
function countdown() {

  timerInterval = setInterval(function(){
  var minutes = $('#minutes').text();
  seconds = $('#seconds').text();
  sessionTime = $('#sessionTime').text();


//run alarm and set minutes to break time when initial countdown ends
  if(minutes == 00 && seconds == 00){
    clearInterval(timerInterval);
    clap();
//run countdown again as break countdown with new varibales
    var minutes = $("#breakTime").text();
    if(minutes >= 10) {
      $('#minutes').text(minutes);
    }else{
      $('#minutes').text('0' + minutes);
    }
    breakInterval();

  }
  else if(seconds == 00) {
    $('#seconds').text('59').delay(1000);
    if(minutes > 10) {
      $('#minutes').text(minutes - 1);
    }else{
      $('#minutes').text('0' + (minutes - 1));
    }
  }else if (seconds > 10) {
    $('#seconds').text(seconds - 1);
  }else{
    $('#seconds').text('0' + (seconds - 1));
  }

  }, 1000);

}


//The timer function for the break period
function breakInterval() {
    breakTimeInverval = setInterval(function(){
    seconds = $('#seconds').text();
    var minutes = $('#minutes').text();
  if(minutes == 00 && seconds == 00) {
    clearInterval(timerInterval);
    minutes = $("#sessionTime").text();
    if(minutes >= 10) {
      $("#minutes").text(minutes);
    } else {
      $("#minutes").text("0" + minutes);
    }
  }
  else if(seconds == 00) {
    $('#seconds').text('59').delay(1000);
    if(minutes > 10) {
      $('#minutes').text(minutes - 1);
    }else{
      $('#minutes').text('0' + (minutes - 1));
    }
  }else if (seconds > 10) {
    $('#seconds').text(seconds - 1);
  }else{
    $('#seconds').text('0' + (seconds - 1));
  }

  $('.stop').click(function(){
    clearInterval(breakTimeInverval);
  });

  }, 1000);
  }
