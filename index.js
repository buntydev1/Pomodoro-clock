
function breakIncrement() {
  var plus = document.getElementById("break-length");
  console.log('value of plus.innerText:', plus.innerText);
  // plus.innerText = parseInt(plus.innerText) + 1;
if(parseInt(plus.innerText) === 60){
 
} else{
  plus.innerText + 1;
  plus.innerText++;
}

}
function breakDecrement() {
  var minus = document.getElementById("break-length");
  console.log('value of minus.innerText:',minus.innerText);
  // minus.innerText = parseInt(minus.innerText) - 1;
  // console.log('value of breaklength:',breaklength);
  if(parseInt(minus.innerText) === 1) {
    //  console.log('value of breaklength:',breaklength);
  } else {
    minus.innerText - 1;
    minus.innerText--;
  }
}
function sessionIncrement() {
  var plus1 = document.getElementById("session-length");
  // plus1.innerText = parseInt(plus1.innerText) + 1;
  if(parseInt(plus1.innerText) === 60){

  }else {
    plus1.innerText + 1;
    plus1.innerText++;
  }
}
function sessionDecrement() {
  var minus1 = document.getElementById("session-length");
  // minus1.innerText = parseInt(minus1.innerText) - 1;
  if(parseInt(minus1.innerText) === 1) {
  
  } else {
    minus1.innerText - 1;
    minus1.innerText--;
  }
}


function start(){
  minutes = 24;
  seconds = 60;

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  function minutesTimer(){
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes;
  }
  function secondsTimer(){
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds;
    if(seconds <= 0) {
      if(minutes <= 0) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);
      }
      seconds = 60;
    }
  }
}
function startTimer(){ 
  timeout = setInterval(function(){countdown(25)}, 1000);
  document.getElementById("start_stop").innerHTML = current_minutes + seconds;
  seconds--;
}
function resetTimer() {
  console.log("hello");
  clearInterval();
  document.getElementById("timer").innerHTML = 25 + ":" + "00";
}
