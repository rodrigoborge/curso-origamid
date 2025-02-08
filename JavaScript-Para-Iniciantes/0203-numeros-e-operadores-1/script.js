//Operadores Aritiméticos
var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4;
var modulo = 14 % 5; // -> Resto da divisão

var divisao2 = 'Comprei 10' / 2; // -> O resultado é NaN (Not a Number)
// É possivel verificar se uma variável é NaN ou não com a função isNaN()
console.log(isNaN(divisao2));

// Operadores Aritiméticos Unários
var x = 5;
console.log(x++);
console.log(x);

// Exercicios
// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);
// Crie duas expressões que retornem NaN
var idade = '35 anos';
console.log(idade / 20);
var pessoas = '40 pessoas';
console.log(pessoas * 2);

// Somar a string '200' com o número 50 e retornar 250
var caractere = '200';
var numero = 50;
console.log(+caractere + numero);

// Incremente o número 5 e retorne o seu valor incrementado
var numero5 = 5;
console.log(numero5++)
console.log(numero5++);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2; // NaN (Not a Number)
console.log(pesoPorDois)