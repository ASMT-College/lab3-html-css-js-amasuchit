// showDate(); //yo rakheko bhaye change hunthyena date matra call garthyo

// setInterval(showDate,1000); //ek ek second ma time change bhairacha

// setTimeout(showDate,5000); //call function only once

function showDateAndTime() {
  document.getElementById("display_date_and_time").innerHTML = Date();
}
var i = setInterval(showDateAndTime, 1000);
function clearDateMove() {
  clearInterval(i);
}
setTimeout(clearDateMove, 5000);

function showClock() {
  var todayDate = new Date();
  var hour = todayDate.getHours();
  var min = todayDate.getMinutes();
  var second = todayDate.getSeconds();
  document.getElementById("display_clock").innerHTML =
    hour + ":" + min + ":" + second;
}
setInterval(showClock, 1000);
