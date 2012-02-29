
var pomoTime,
    timer_id;
// var ring = false;

// var audioElement = document.createElement('audio');

// audioElement.setAttribute('src', 
//                           'audio/alarm-clock-1.mp3');

// audioElement.setAttribute('loop', 
//                            true);


// Start a new timer
function setPomodoro(minTime){
  // Sets the global timer in milliseconds
  pomoTime = minTime * 60 * 1000;
  timerRun();
}

// Start the timer
function timerRun(){
  // timerStop();
  timer_id = setInterval('pomo()', 10);
  $('#info').slideUp();
}

// Stop the timer
function timerStop (){
  clearInterval(timer_id);
  $('#info').slideDown(); 
  // alert('stop');
  // ringBell();
}



// function stopBell(){
//   audioElement.pause();
// }

// function ringBell(){
//   $('audio').remove();
//   $('body').append('<audio src="audio/alarm-clock-1.mp3" autostart="true" hidden="true" loop="false">');
// }













function pomo(){

  if(pomoTime>0)
    pomoTime-= 10;
  else {
    //pomoTime=0;
    timerStop();
  }
    
  // if(pomoTime==0 && ring == false){
  //    ringBell();
  //    ring = true;
  // } else {
  //   // stopBell();
  // }

  // To convert the time
  var myTime = pomoTime;

  var minutes = Math.floor(myTime/(60*1000));
      myTime  = myTime - minutes*60*1000;

  var seconds = Math.floor(myTime/1000);
      myTime  = myTime - seconds*1000;

  // To format the output
  var str = '';
  if (minutes<10)
    str = '0';
  $('#m').text(str + minutes);

  var str = '';
  if (seconds<10)
    str = '0';
  $('#s').text(str + seconds);

  var str = '';
  if (myTime<10)
    str = '00';
  else if (myTime<100)
    str = '0';
  $('#ms').text(str + myTime);

}







$(document).ready(function() {
  
  // 25 minutes timer  
  $('#pomodoro25').click(function() { 
    setPomodoro(25); 
  });
  
  // 15 minutes timer
  $('#pomodoro15').click(function() { 
    setPomodoro(15); 
  });
  
  // 5 minutes timer
  $('#pomodoro5').click(function()  { 
    setPomodoro(5);  
  });

  // to stop the timer
  $('#stop').click(function() {
      // //clearTimeout(timer_id);
      // clearInterval(timer_id);
      // $('#info').slideDown();
      timerStop();
  });

  // only for testing
  $('#pl').click(function()  { 
    setPomodoro(0.02);  
  });

  // only for testing
  $('#st').click(function() { 
    stopBell(); 
  });

});

































