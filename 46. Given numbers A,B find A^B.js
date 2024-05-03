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
var A = input[0];
var B = input[1];
var power=0;

    power = Math.pow(A,B);
    console.log(power);
    


  //end-here
});
