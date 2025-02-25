function Pessoa(nome, idade) {
    this.nome;
    this.idade;
    this.abracar = function () {
        return 'Abracou';
    };
    this.andar = function () {
        return 'Andou pelo objeto!';
    };
}

Pessoa.prototype.andar = function () {
    return 'Pessoa andou';
};

Pessoa.prototype.nadar = function () {
    return 'Pessoa nadou';
};

const andre = new Pessoa('André', 28);

console.log(Pessoa.prototype);

//CONSTRUTORES NATIVOS

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

//CONVERTENDO NODELIST EM ARRAY
const listaArray = Array.prototype.slice.call(lista);
//Fazendo dessa forma é possivel acessar os prototypes de funções no array

//Outra forma de fazer isso é usando o .from, exemplo:
const listaArrayFrom = Array.from(lista);

const carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    },
};

//EXERCICIOS
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, pessoa, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
};

const rodrigo = new Pessoa('Rodrigo', 'Borge', 35);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

//Dentro do navegador:
NodeList.prototype;
HTMLCollection.prototype;
Document.prototype;

//Também é possivel acessar usando o comando
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLAllCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// Para consultar é usado o comando no navegador:
li.constructor.name;
//Com o resultado, neste caso 'HTMLLIElement', é usado o .prototype
HTMLLIElement.prototype;

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Numero
li.hidden; //Boleano
li.offsetLeft; //Numero
li.click(); //Undefined

// Qual o construtor do dado abaixo:
// li.hidden.constructor.name;
