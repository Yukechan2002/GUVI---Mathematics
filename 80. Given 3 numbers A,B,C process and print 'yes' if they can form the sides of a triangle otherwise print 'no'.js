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
 var A = parseInt(input[0]);
 var B = parseInt(input[1]);
 var C = parseInt(input[2]);
 if(A+B>C && B+C>A && A+C>B){
     console.log('yes');
 }
 else
 console.log('no');
 
  //end-here
});
