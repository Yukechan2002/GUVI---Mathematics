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
var arr = []
//var factor = 0;
for(var i = 1;i<=input;i++){
    if(input % i === 0 & i%2 !==0){
        arr.push(i);
    }
}
console.log(arr.join(' '));

  //end-here
});
