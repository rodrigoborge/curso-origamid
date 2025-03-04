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

carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
