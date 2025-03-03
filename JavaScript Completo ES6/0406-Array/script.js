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

console.log(instrumentos);
