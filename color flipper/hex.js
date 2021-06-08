const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// #f15025
btn.addEventListener('click', function () {
    let hexColor = "#";
    for (let num = 0; num < 6; num++) {
        hexColor += hex[getranNum()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
function getranNum(){
    return Math.floor(Math.random()*hex.length);
}