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

var N = userInput[0].split('');
var check = 0;
N.sort();
for(var i = 0;i<N.length;i++){
    if(N[i]==N[i+1]){
        console.log('yes');
        break;
    }
    else
    check = 1;
    
}
if(check == 1){
    console.log('no');
}
  //end-here
});
