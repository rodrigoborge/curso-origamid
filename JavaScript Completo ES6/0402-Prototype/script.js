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
