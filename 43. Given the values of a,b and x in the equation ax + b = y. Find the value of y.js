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
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var x = parseInt(input[2]);
var y = 0;
y = parseInt((a*x)+b);
console.log(y);

  //end-here
});
