// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var input = userInput[0].split(' ');
var a = input[0];
var d = input[1];
var n = input[2];
var an = (n-1)*d;
var output = 0;
output = n * 0.5 * (2*a + an);
console.log(output);
//end-here
});
