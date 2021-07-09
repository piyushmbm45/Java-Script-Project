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
  
  console.log(myWords[2]);
  let word = '';
//   let numWord = 5
//       for (let i = 1; i <= numWord; i++) {
//           const num = Math.floor(Math.random() * 30);
//           word = `${word} ${myWords[num]}`;
//         }




        for (let i = 1; i < 51; i++) {
            const num = Math.floor(Math.random() * 64);
            word = `${word} ${myWords[num]}`;
          }
          console.log(word);
