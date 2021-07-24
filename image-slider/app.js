const btn = document.querySelector(".next");
const imgArray = [
  "images/img-1.jpg",
  "images/img-2.jpg",
  "images/img-3.jpg",
  "images/img-4.jpg",
  "images/img-5.jpg",
];
btn.addEventListener("click", () => {
  var img = document.getElementById("img").getAttribute("src");

  switch (img) {
    case imgArray[0]:
      document.getElementById("img").setAttribute("src", imgArray[1]);
      break;
    case imgArray[1]:
      document.getElementById("img").setAttribute("src", imgArray[2]);
      break;
    case imgArray[2]:
      document.getElementById("img").setAttribute("src", imgArray[3]);
      break;
    case imgArray[3]:
      document.getElementById("img").setAttribute("src", imgArray[4]);
      break;
    case imgArray[4]:
      document.getElementById("img").setAttribute("src", imgArray[0]);
      break;
  }
});
