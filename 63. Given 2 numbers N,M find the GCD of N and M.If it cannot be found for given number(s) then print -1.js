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

var input = userInput[0].split(' ');
var N = parseInt(input[0]);
var M = parseInt(input[1]);
if( N===0 || M === 0){
    console.log(-1);
}
else{
    while(M!==0){
        var temp = M;
        M = N % M;
        N = temp;
    }
    console.log(N);
}


  //end-here
});
