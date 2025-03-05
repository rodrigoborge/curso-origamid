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
