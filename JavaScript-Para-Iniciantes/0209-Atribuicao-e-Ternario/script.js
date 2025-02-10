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
