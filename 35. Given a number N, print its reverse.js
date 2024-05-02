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
  
/* var input = parseInt(userInput[0]);
var rev = 0;
var rem = 0;
while(input !==0){
 rem = input % 10;
rev = rev * 10  + rem;
    input = parseInt(input /10);
}
console.log(rev); */

var input = userInput[0];
var reverse = parseInt(input.toString().split('').reverse().join(''));
console.log(reverse);

  //end-here
});
