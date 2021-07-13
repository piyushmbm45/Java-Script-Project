let date = new Date();

const event1 = new Date("July 8, 2021 12:59:30");

console.log(date);
console.log(event1);

// let myDay = event1 - date;
let diffTime = Math.abs(event1 - date);
let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
if (diffDays === 0) {
  let diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  if (diffHours === 0) {
    let diffMin = Math.floor(diffTime / (1000 * 60));
    if(diffMin === 0){
    let diffSec = Math.floor(diffTime / (1000));

    }
  }
}

console.log(diffDays);
console.log(diffHours);

// var myTime = setInterval(function timer1() {
//   sec = sec - 1;
//   if (sec === 0 && min != 0) {
//     min = min - 1;
//     sec = 59;
//   } else if (min === 0 && sec === 0 && hour != 0) {
//     hour = hour - 1;
//     min = 59;
//     sec = 59;
//   } else if (hour === 0 && min === 0 && sec === 0) {
//     myStopfunction();
//   }
//   var heading = document.querySelector("#timer");
//   heading.innerHTML = `${hour} : ${min} : ${sec}`;
// }, 1000);

// function myStopfunction() {
//   clearInterval(myTime);
// }
