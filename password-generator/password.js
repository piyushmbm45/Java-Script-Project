const symbols = ["&", "*", "@", "?", "%", "+", "#", "$", "=", "!"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowerAlpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperAlpha = [
  "A",
  "E",
  "I",
  "O",
  "U",
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "X",
  "Z",
];

const similarChar = ["i", "l", "1", "L", "o", "0", "O"];
const ambiChar = [
  "{",
  "}",
  "[",
  "]",
  "(",
  ")",
  "/",
  "'",
  '"',
  "`",
  "~",
  ",",
  ";",
  ":",
  ".",
  "<",
  ">",
  "\\",
];

var lengthEl = document.getElementById("length");
var symbolsEl = document.getElementById("symbol");
var numbersEl = document.getElementById("number");
var lowerEl = document.getElementById("lowerCase");
var upperEl = document.getElementById("upperCase");

const randonFunc = {
  number: randomNumber,
  symbol: randomSymbol,
  upper: randomUpper,
  lower: randomLower,
};
var num;
var pass = "";
document.querySelector("#btn").addEventListener("click", () => {
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const length = lengthEl.value;

  let runArray = [hasNumber, hasSymbol, hasUpper, hasLower];
  for (let index = 0; index < length; index++) {
      
  }
});
// document.querySelector(".copy").addEventListener("click",()=>{
//     const copy1 = document.getElementById("pass");
//     copy1.focus();
//     copy1.select();
//     document.execCommand("copy");
//     alert("copied");
// })

// const num = Math.floor(Math.random()*10);
// pass += symbols[num];
// array.push(symbols[num]);
// console.log(array.toString());
// console.log(pass);

function randomNumber(num) {
  num = Math.floor(Math.random() * numbers.length);
  pass += numbers[num];
  return;
}
function randomSymbol(num) {
  num = Math.floor(Math.random() * symbols.length);
  pass += symbols[num];
  return;
}
function randomUpper(num) {
  num = Math.floor(Math.random() * upperAlpha.length);
  pass += upperAlpha[num];
  return;
}
function randomLower(num) {
  num = Math.floor(Math.random() * lowerAlpha.length);
  pass += lowerAlpha[num];
  return;
}
