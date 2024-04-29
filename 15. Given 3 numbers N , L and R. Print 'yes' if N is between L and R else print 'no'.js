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
var input1 = parseInt(userInput[0]);
var input2 = userInput[1].split(' ');
var num2 = input2[0];
var num3 = input2[1];
if(input1>num2 && input1<num3){
    console.log("yes");
}
else
console.log("no");


  //end-here
});
