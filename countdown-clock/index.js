let date = new Date();

let value1 = date.getTime();

let event1 = new Date(2021, 6, 9, 19, 11, 0, 0);

let value2 = event1.getTime();

let time = Math.floor((value2 - value1) / 1000);
console.log(time);
// we got the time difference from future value(sale day and time) and present value

let days = Math.floor(time / (60 * 60 * 24));
// no. days in given time

let daysMinus = time - days * 60 * 60 * 24;
// no. days/time remaining after subtarcting the days

let hours = Math.floor(daysMinus / (60 * 60));
// no. of hours in given time(daysminus in this case)

let hoursMinus = Math.floor(daysMinus - hours * 60 * 60);
// no. of minute + sec remaining

let min = Math.floor(hoursMinus / 60);
// no. minute

let minMinus = Math.floor(hoursMinus - min * 60);
// no. of seconds

let sec = minMinus;

var myTime = setInterval(function timer1() {
  sec = sec - 1;
  if (sec === 0 && min != 0) {
    min = min - 1;
    sec = 59;
  } else if (min === 0 && sec === 0 && hours != 0) {
    hour = hour - 1;
    min = 59;
    sec = 59;
  } else if (min === 0 && sec === 0 && hours === 0 && days != 0) {
    days = days - 1;
    hours = 23;
    min = 59;
    sec = 59;
  } else if (days === 0 && hours === 0 && min === 0 && sec === 0) {
    myStopfunction();
  }
  var heading = document.querySelector("#timer");
  heading.innerHTML = `${days} : ${hours} : ${min} : ${sec}`;
}, 1000);

function myStopfunction() {
  clearInterval(myTime);
}
