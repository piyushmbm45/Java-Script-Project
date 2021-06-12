// Counter
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if(count>0){
            value.style.color = "green";
        }
        if(count<0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "black";
        }
        value.textContent = count;
    });
});



// color change
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    function getRandNum(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    debugger;
    let x = getRandNum(0, 256);
    let y = getRandNum(0, 256);
    const z = getRandNum(0, 256);
    document.body.style.backgroundColor = "rgb" + "(" + x + "," + y + "," + z + ")";
    color.textContent = "rgb" + "(" + x + "," + y + "," + z + ")";
});


