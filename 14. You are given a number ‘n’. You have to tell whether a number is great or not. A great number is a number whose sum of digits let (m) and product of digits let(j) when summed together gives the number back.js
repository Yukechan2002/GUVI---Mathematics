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
var num = parseInt(userInput[0]);
var sum =  0;
var product = 1;
var output = 0;
var temp = num;
var temp2 = num;

while(num>0){ 
    sum = sum + num % 10;
    num = Math.floor(num / 10);
}
while(temp>0){
    product = product * (temp % 10);
    temp = Math.floor(temp / 10);
}

output = sum + product;
if(output>=temp2){
    console.log("Great");
}
else
console.log("no");

//end-here
});
