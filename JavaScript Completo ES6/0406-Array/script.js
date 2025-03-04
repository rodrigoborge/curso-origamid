const precos = [49, 99, 69, 89];

const dados = [
    new String('Tipo 1'),
    ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
    function andar(nome) {
        console.log(nome);
    },
];

const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[20] = 'BYD';
console.log(carros.length);

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const objeto = {
    0: 'Rodrigo',
    1: 'Flavia',
    3: 'Teste',
    length: 3,
};

const objArray = Array.from(objeto);

console.log(li);
console.log(arrayLi);

//Lenght
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

console.log(frutas.length);

//Métodos Modificadores
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();

console.log(instrumentos);
console.log(idades);

//Splice
//[].splice(index, remover, item1, item2,...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mustang'); // []
carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']
console.log(carros);

carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
console.log(carros);

//[].copyWithin()
//[]/copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 3));

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(-1));

[].fill()[
    //[].fill(valor, inicio, final) preenche a array com o valor, do inicio até o fim.

    ('Item1', 'Item2', 'Item3', 'Item4')
].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']

//Métodos de Acesso [].concat()
//Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];
