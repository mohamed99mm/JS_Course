//Timing Mwthods

//--->SetInterval (fn, 0)   //clearInterval(fn)

// work with every interval of time example printv alert vmessage every 10 seconds
//--->SetTimeout(fn -->callback function,0-->interval in milliseconds)  //clearTimeoout(fn)

//work only one time after my interval (0) ends

var timerID;

//Interval

/*
function satrtAlert() {

  timerID = setInterval(function () {
    alert("interval Fired");
  }, 5000);
}
*/

function satrtAlert(x) {
  alert("interval Fired " + x);
  x++;
  timerID = setTimeout(satrtAlert, 5000, x);
}
/*
function stopAlert() {
    clearInterval(timerID);
  }
  
  */

function stopAlert() {
  clearTimeout(timerID);
}
