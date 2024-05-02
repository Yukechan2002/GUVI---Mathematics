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
var isprime = 1;
if(input<2)
isprime = 0;
for(var i =2;i<input;i++){
    if(input % i === 0 ){
       isprime = 0;
        break;
    }
}
if(isprime == 1){
    console.log('yes');
}
else
console.log('no');

  //end-here
});
