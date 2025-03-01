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
