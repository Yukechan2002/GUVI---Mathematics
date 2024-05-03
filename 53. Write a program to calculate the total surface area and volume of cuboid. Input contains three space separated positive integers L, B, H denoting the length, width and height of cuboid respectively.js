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
var l = input[0];
var b = input[1];
var h = input[2];
var output_arr = [];
var surface_area = 2 *(l*b + b*h + l*h);
output_arr.push(surface_area);
var volume = l * b * h;
output_arr.push(volume);
console.log(output_arr.join(" "));
  //end-here
});
