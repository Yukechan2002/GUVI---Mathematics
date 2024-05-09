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
var input = userInput[0].split(" ");
var N = input[0];
var K = input[1];

function ispowerof(N,K){
    while(N>1){
        if(N%K!==0){
         return 'no';   
        }
        N=N/K
    }
    return 'yes';
}

console.log(ispowerof(N,K));
  //end-here
});
