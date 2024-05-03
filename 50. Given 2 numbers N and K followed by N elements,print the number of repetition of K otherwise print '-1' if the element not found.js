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
var input = userInput[0].split(' ').map(Number);
var K = input[1];
var N = userInput[1].split(' ').map(Number)
var res = N.filter((ele)=>ele==K);
if(res.length === 0)
console.log('-1');
else
console.log(res.length-1);


  //end-here
});
