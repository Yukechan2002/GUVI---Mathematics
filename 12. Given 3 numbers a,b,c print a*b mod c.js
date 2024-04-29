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
var b = input[1];
var c = input[2];
var output = (a*b)%c;
console.log(output);

  //end-here
});
