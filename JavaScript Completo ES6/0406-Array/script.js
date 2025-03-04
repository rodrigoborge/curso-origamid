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

//[].includes(), [].indexOf() e [].lastIndexOf()
//[].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5

//[].join()
//[].joiin(separador) junta todos os valores da array e retorna uma string com eles. Se passar o valor como um parâmetro, este será utilizado durante a junção de cada item da array.

const linguagens1 = ['html', 'css', 'js', 'php', 'python'];
linguagens.join(); // 'html,css,js,php,python'
linguagens.join(' '); // 'html css js php python'
linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>

//[].slice()
//[].slice(inicio, final) retorna os itens da array começando pelo inicio e indo até o valor de final
const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();

//EXERCICIOS

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas.shift();
console.log(primeiroValor);
// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas.pop();
console.log(ultimoValor);
// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
// Inverta a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

let html = `<section>
            <div>Sobre</div>
            <div>Produtos</div>
            <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section');
html = html.join('ul');
html = html.split('div');
html = html.join('li');

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosCopy = carros.slice();
carros.pop();

console.log(carros);
