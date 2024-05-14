var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};
var a = parseInt(prompt("Informe o primeiro valor"));
var b = parseInt(prompt("Informe o segundo valor"));
var x = a + b
console.log("X = " + x);
