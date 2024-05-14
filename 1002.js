var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

var area
var n = 3.14159
var raio = parseFloat(prompt("Informe o valor do raio"));
var area = n * (raio * raio);
console.log("A=" + area.toFixed(4));
