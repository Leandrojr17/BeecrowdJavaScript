var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

var [A, B, C] = input.split(" ").map(item => parseInt(item));
var maior = Math.max(A, B, C);

console.log(maior + " eh o maior");
