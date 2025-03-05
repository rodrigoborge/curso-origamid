//[].forEach()
//[].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui tres argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original)

const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach((item, index, array) => {
    console.log(item.toLocaleUpperCase(), index, array);
});

//Arrow Function

const li = document.querySelectorAll('li');

li.forEach((item) => item.classList.add('ativa'));

li.forEach(function (item) {
    item.classList.add('ativa');
});

//[].map()
//[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração

const carros2 = ['Ford', 'Fiat', 'Honda'];
const novaArray = carros2.map((item, index, array) => {
    return item.toUpperCase();
});

console.log(novaArray);
console.log(carros2);

//Valor retornado
// Se não retornamos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.

//Arrow Function e [].map()
//Uma Arrow function de linha unica e sem chaves irá retornar o valor após a fat arrow =>
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map((numeros) => numeros * 3);
console.log(numerosX3); //[6, 12, 18, 24, 30, 36, 42]


//[].map() vs [].forEach()
//Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores

//[].map() com Objetos
//Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

