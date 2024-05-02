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
var count = 0;
while(input !==0){
    input = parseInt(input/10);
    count++;
}
console.log(count);

/*
var input = userInput[0].split('');
var out = input.length;
console.log(out);
*/
  //end-here
});
