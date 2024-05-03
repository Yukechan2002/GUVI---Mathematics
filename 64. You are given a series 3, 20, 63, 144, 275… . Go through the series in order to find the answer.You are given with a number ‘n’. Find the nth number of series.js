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
var n = parseInt(userInput[0]);
var output = 0;
output = (2 * (n*n*n)) + (n*n);
console.log(output);

  //end-here
});
