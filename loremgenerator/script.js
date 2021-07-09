const myWords = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit amet",
  "consectetur",
  "adipiscing elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua.",
  "Ut",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "ut",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat.",
  "Duis",
  "aute",
  "irure",
  "dolor",
  "inreprehenderit",
  "involuptate",
  "velit",
  "esse",
  "cillum",
  "dolore",
  "eu",
  "fugiat",
  "nulla",
  "pariatur.",
  "Excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident",
  "sunt",
  "inculpa",
  "qui",
  "officia",
  "deserunt",
  "mollit",
  "anim",
  "id",
  "est",
  "laborum.",
];

// Paragraph generator
const wordInput = document.querySelector("#num1");
const btn = document.querySelector(".btn1");
const display = document.querySelector(".para1");

btn.addEventListener('click',()=>{
  
})










// Words generator
const wordInput = document.getElementById("num2");
const btn = document.querySelector(".btn2");
const display = document.querySelector(".para2");

btn.addEventListener('click', () => {
  var word = "Hi";
  let numWord = wordInput.value;
  for (let i = 1; i < numWord; i++) {
    const num = Math.floor(Math.random() * 30);
    word = `${word} ${myWords[num]}`;
  }
  display.innerHTML = word;
});
