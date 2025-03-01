console.log(Number.isNaN('ds'));
console.log(Number.isInteger(20));
console.log(Number.isInteger(20.23));

console.log(parseFloat('100 reais'));
console.log(parseInt(23.45));

const preco = 2.923323;
console.log(+preco.toFixed(2));

let valor = 48.49;
valorR = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
valorD = valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
console.log(valorD, valorR);

console.log(Math.PI);

console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.max(4, 43, 56, 34, 23, 12, 2, 2, 4, 6));

let numeroAleatorio = Math.floor(Math.random() * 60);
console.log(numeroAleatorio);

//Para colocar o randam entre um intervalo
//Math.floor(Math.random() * (max - min + 1)) + min;

let numeroAleatorio2 = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
console.log(numeroAleatorio2);

// EXERCICIOS

// Retorne um número aleatório
// entre 1050 e 2000
let numeroAleatorioExercicio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(numeroAleatorioExercicio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

console.log();

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];
