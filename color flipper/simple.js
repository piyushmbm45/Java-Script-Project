const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    debugger;
    function getRandNum(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const x = getRandNum(0,4);
    document.body.style.backgroundColor = colors[x];
    color.textContent = colors[x];
});


