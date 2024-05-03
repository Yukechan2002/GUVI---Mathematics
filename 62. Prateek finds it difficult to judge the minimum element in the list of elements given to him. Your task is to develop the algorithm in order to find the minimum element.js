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

//var input1 = parseInt(userInput[0]);
var input2 = userInput[1].split(' ');
input2.sort();
console.log(input2[0]);

  //end-here
});
