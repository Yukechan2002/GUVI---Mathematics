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

var input=userInput[0].split(' ');
var b = parseInt(input[0]);
var h = parseInt(input[1]);
var area = 0.5 * b * h;
console.log(area);

  //end-here
});
