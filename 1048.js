var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt= function(texto){return lines.shift();};

var sal = parseFloat (prompt("Informe o salario do funcionario"))
if (sal > 0 && sal <= 400){
    var rj = (sal * 0.15 ) + sal
    console.log ("Novo salario: " + rj.toFixed(2))
    console.log ("Reajuste ganho: " + (sal * 0.15).toFixed(2))
    console.log ("Em percentual: 15 %")
} else if (sal > 400 && sal <= 800){
    var rj = (sal * 0.12 ) + sal
    console.log ("Novo salario: " + rj.toFixed(2))
    console.log ("Reajuste ganho : " + (sal * 0.12).toFixed(2))
    console.log ("Em percentual: 12 %")
} else if(sal > 800 && sal <= 1200){
    var rj = (sal * 0.10 ) + sal
    console.log ("Novo salario: " + rj.toFixed(2))
    console.log ("Reajuste ganho: " + (sal * 0.10).toFixed(2))
    console.log ("Em percentual: 10 %")
} else if (sal > 1200 && sal <= 2000){
    var rj = (sal * 0.07 ) + sal
    console.log ("Novo salario: " + rj.toFixed(2))
    console.log ("Reajuste ganho: " + (sal * 0.07).toFixed(2))
    console.log ("Em percentual: 7 %")
} else if (sal > 2000){
    var rj = (sal * 0.04 ) + sal
    console.log ("Novo salario: " + rj.toFixed(2))
    console.log ("Reajuste ganho: " + (sal * 0.04).toFixed(2))
    console.log ("Em percentual: 4 %")
}

var prompt = function (texto){return lines.shift ();};
