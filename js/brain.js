
var pomoTime,
    timer_id;



// Stop the timer
function timerStop (){
  clearInterval(timer_id);
  $('#info').slideDown(); 
}



// Sets the global timer in milliseconds
function setPomodoro(minTime){
  //timerStop();
  pomoTime = minTime * 60 * 1000;
  timerRun();
}

// Start the timer
function timerRun(){
  clearInterval(timer_id);
  timer_id = setInterval('pomo()', 100);
  $('#info').slideUp();
}











function pomo(){

  if(pomoTime>0)
    pomoTime-= 100;
  else {
    //pomoTime=0;
    timerStop();
  }
    
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
    timerStop();
  });


  // to stop the timer
  $('#start').click(function() {
    timerRun();
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

































