const symbols = ['&','*','@','?','%','+','#','$','=','!',]
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y','z'];
const upperAlpha = ['A', 'E', 'I', 'O', 'U','B','C','D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'Z'];

const similarChar = ['i', 'l', '1', 'L', 'o', '0', 'O'];
const ambiChar = ['{', '}', '[', ']', '(', ')', '/', "'", '"', "`", "~", ",", ";", ':' ,".",'<','>',"\\"];


const n = 6;  // n - password length
const array =[];
let pass = "";
for(let i= 0; i<n; i++){
    const num = Math.floor(Math.random()*10);
    pass += symbols[num];
}
// array.push(symbols[num]);
// console.log(array.toString());
console.log(pass);