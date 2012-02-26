var timer_id;
var pomoTime;

var ring = false;

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'audio/alarm-clock-1.mp3');
audioElement.setAttribute('loop', true);

function stopBell(){
  audioElement.pause();
}

function ringBell(){
  stopBell();
  // $('audio').trigger("pause");
  // $('audio').trigger("play");
  // $('audio').play();
  audioElement.currentTime=0;
  audioElement.play();

  
}

function setPomodoro(minTime){
  pomoTime = minTime*60*1000;
  timerRun();
}

function timerRun(){
  timerStop();
  timer_id = setInterval('pomo()', 10);
  $('#info').slideUp();
}

function timerStop (){
  clearInterval(timer_id);
  $('#info').slideDown();
}




$(document).ready(function() {


  



  $('#pomodoro25').click(function() { setPomodoro(25); });
  $('#pomodoro15').click(function() { setPomodoro(15); });
  $('#pomodoro5').click(function()  { setPomodoro(5);  });
  $('#pl').click(function()  { setPomodoro(0.02);  });

  $('#st').click(function() { stopBell(); });

  $('#stop').click(function() {
      // //clearTimeout(timer_id);
      // clearInterval(timer_id);
      // $('#info').slideDown();
      timerStop();
  });

});

function pomo(){

  if(pomoTime>0){
    pomoTime-= 10;
  }
  else {
    pomoTime=0;
    $('#info').slideDown();
  }

  if(pomoTime==0 && ring == false){
    ringBell();
    ring = true;
  }
    

  var myTime = pomoTime;

  var minutes = Math.floor(myTime/(60*1000));
  myTime = myTime - minutes*60*1000;

  var seconds = Math.floor(myTime/1000);
  myTime = myTime - seconds*1000;

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
