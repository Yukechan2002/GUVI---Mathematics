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

var input = parseInt(userInput[0]);
var sum = 0;
var digit = 0;

    while(input){
        digit = input%10;
        sum = sum + digit * digit;
        input = parseInt(input/10);
        
    }

console.log(sum);

  //end-here
});
