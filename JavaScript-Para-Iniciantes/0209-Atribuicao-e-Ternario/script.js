// Operadores de Atribuiçao

// Podem funcionar como formas abreviadas

//Exemplos
var numero1 = 5;
var numero2 = 10;

numero1 += numero2; // -> numero1 = numero1 + numero2 = 15
numero1 -= numero2; // -> numero1 = numero1 - numero2 = -5
numero1 *= numero2; // -> numero1 = numero1 * numero2 = 50
numero1 /= numero2; // -> numero1 = numero1 / numero2 = 0.5
numero1 %= numero2; // -> numero1 = numero1 % numero2 = 0
numero1 **= numero2; // -> numero1 = numero1 ** numero2 = 9765625

// Operador Ternário
var idade = 20;
var naoPossuiDiabetes = false;

var podeBeber;
podeBeber = idade >= 18 && naoPossuiDiabetes ? 'Pode beber' : 'Pode beber';
console.log(podeBeber);

// Exercicios

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa;
console.log(darCredito);
