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
var arr  = userInput[1].split(' ').map(Number);
var out = 0;

for(var i =0; i<arr.length ; i++){
    if(arr[i]<0){
      out = out + arr[i];  
    }
    
}
console.log(out);


  //end-here
});
