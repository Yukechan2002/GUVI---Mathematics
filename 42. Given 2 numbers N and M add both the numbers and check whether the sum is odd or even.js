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

var input = userInput[0].split(" ").map(Number);
var res = input.reduce((acc,cv)=>acc+cv,0);
if(res%2===0){
    console.log("even");
}
else 
console.log("odd");



  //end-here
});
