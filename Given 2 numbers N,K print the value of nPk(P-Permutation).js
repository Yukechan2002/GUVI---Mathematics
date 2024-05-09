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

var input =  userInput[0].split(' ');
var N = input[0];
var K = input[1];
var R = N - K;
var n = 1;

for(var i = N;i>R;i--){
    n = n*i;
}

console.log(n);

  //end-here
});
