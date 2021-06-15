// C to F
document.getElementById('btn1').addEventListener('click', tempChange1);

function tempChange1(){
    var x = document.getElementById("temp1").value;
    const temp1 = (x*9/5)+32;
    document.getElementById("demo1").innerHTML = temp1 + " °F"; // ° this symbol came - shift + option + 8
}
    

// F to C
document.getElementById('btn2').addEventListener('click', tempChange);

function tempChange(){
    var x = document.getElementById("temp2").value;
    const temp1 = (x-32)*(5/9);
    document.getElementById("demo2").innerHTML = temp1.toFixed(2) + " °C";
}


