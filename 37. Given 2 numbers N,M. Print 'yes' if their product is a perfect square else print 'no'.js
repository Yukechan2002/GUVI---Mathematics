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

var input = userInput[0].split(" ");
var n1 = input[0];
var n2 = input[1];
var product = n1*n2;
var squareroot = Math.sqrt(product);
if(squareroot == n1){
    console.log("yes");
}
else
console.log("no");

  //end-here
});
