stopBell = ->
  audioElement.pause()
ringBell = ->
  stopBell()
  audioElement.currentTime = 0
  audioElement.play()
setPomodoro = (minTime) ->
  pomoTime = minTime * 60 * 1000
  timerRun()
timerRun = ->
  timerStop()
  timer_id = setInterval("pomo()", 10)
  $("#info").slideUp()
timerStop = ->
  clearInterval timer_id
  $("#info").slideDown()
pomo = ->
  if pomoTime > 0
    pomoTime -= 10
  else
    pomoTime = 0
    $("#info").slideDown()
  if pomoTime is 0 and ring is false
    ringBell()
    ring = true
  myTime = pomoTime
  minutes = Math.floor(myTime / (60 * 1000))
  myTime = myTime - minutes * 60 * 1000
  seconds = Math.floor(myTime / 1000)
  myTime = myTime - seconds * 1000
  str = ""
  str = "0"  if minutes < 10
  $("#m").text str + minutes
  str = ""
  str = "0"  if seconds < 10
  $("#s").text str + seconds
  str = ""
  if myTime < 10
    str = "00"
  else str = "0"  if myTime < 100
  $("#ms").text str + myTime
timer_id = undefined
pomoTime = undefined
ring = false
audioElement = document.createElement("audio")
audioElement.setAttribute "src", "audio/alarm-clock-1.mp3"
audioElement.setAttribute "loop", true
$(document).ready ->
  $("#pomodoro25").click ->
    setPomodoro 25

  $("#pomodoro15").click ->
    setPomodoro 15

  $("#pomodoro5").click ->
    setPomodoro 5

  $("#pl").click ->
    setPomodoro 0.02

  $("#st").click ->
    stopBell()

  $("#stop").click ->
    timerStop()
