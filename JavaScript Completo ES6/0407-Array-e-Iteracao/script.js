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

const aulas = [
    {
        nome: 'HTML 1',
        min: 15,
    },
    {
        nome: 'HTML 2',
        min: 10,
    },
    {
        nome: 'CSS 1',
        min: 20,
    },
    {
        nome: 'JS 1',
        min: 25,
    },
];

const tempoAulas = aulas.map((aula) => aula.min);

function nomeAulas(aula) {
    return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas);

console.log(arrayNomeAulas);
console.log(tempoAulas);

//[].reduce()
//[].reduce(callback(acumulador, valorAtual, index, array) valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

const aulas2 = [10, 25, 30];
const reduceAulas = aulas.reduce((acumulador, item) => {
    console.log(acumulador, item);
    return acumulador + item;
}, 0);
console.log(`valor ${reduceAulas}`);

//Reduce Passo a Passo 1
//O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior.

// const aulas3 = [10, 25, 30];

// // 1
// aulas3.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// // 2
// aulas3.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas3.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65

const numeros2 = [10, 25, 30, 3, 54, 33, 22];
const maiorNumero = numeros2.reduce((anterior, atual) => {
    if (anterior > atual) {
        return anterior;
    } else {
        return atual;
    }
}, 0);

console.log(maiorNumero);

const aulas3 = [
    {
        nome: 'HTML 1',
        min: 15,
    },
    {
        nome: 'HTML 2',
        min: 10,
    },
    {
        nome: 'CSS 1',
        min: 20,
    },
    {
        nome: 'JS 1',
        min: 25,
    },
];

const listaAulas = aulas.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome;
    return acumulador;
}, {});

//Passo a passo Reduce
//Passo a passo do método reduce criando um Objeto.
// 1
// aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
//   {}[0] = 'HTML 1';
//   return {0: 'HTML 1'};
// }, {})

// // 2
// aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
//   {0: 'HTML 1'}[1] = 'HTML 2';
//   return {0: 'HTML 1', 1: 'HTML 2'};
// }, {})

// // 3
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
//   {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
// }, {})

// // 4
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
//   {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
// }, {})

//[].reduceRight()
//Existe o metodo [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva

//[].some()
//[].some(), se pelo menos um return da iteração for verdadeiro ele retorna true
const frutas2 = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
    return fruta === 'Uva';
}); // true

function maiorQue100(numero) {
    return numero > 100;
}
const numeros3 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100); // true

//[].every()
//[].every() se todos os returns das iteraçoes forem verdadeiros o método irá retornar true. Se pelo menos um for falso ele irá retornar falso
const frutas3 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas.every((fruta) => {
    return fruta; // false
});

const numeros4 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every((x) => x > 3); // true

//[].find() e [].findIndex()
//[].find() retorna o valor atual da primeira iteraçao que retornar um valor verdadeiro. Já o [].findIndex() ao inves de retornar o valor, retorna o index deste valor na array

const frutas4 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas.findIndex((fruta) => {
    return fruta === 'Uva';
}); // 2

const numeros5 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find((x) => x > 45); // 88

//[].filter()
//[].filter() retorna uma array com a lista de valores que durante a sua iteraçao retornaram um valor verdadeiro

const frutas5 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas.filter((fruta) => {
    return fruta;
}); // ['Banana', 'Uva', 'Maçã']

const numeros6 = [6, 43, 22, 88, 101, 29];
const buscaMaior45_2 = numeros.filter((x) => x > 45); // [88, 101]

//FILTER EM OBJETOS

const aulas7 = [
    {
        nome: 'HTML 1',
        min: 15,
    },
    {
        nome: 'HTML 2',
        min: 10,
    },
    {
        nome: 'CSS 1',
        min: 20,
    },
    {
        nome: 'JS 1',
        min: 25,
    },
];

const aulasMaiores = aulas.filter((aula) => {
    return aula.min > 15;
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
