// É um conjunto de VARIÁVEIS E FUNÇÕES
var pessoa = {
    nome: 'Rodrigo',
    idade: 35,
    Cidade: 'Curitiba',
};
console.log(pessoa);

//Métodos
// É um propriedade que possui uma função no local do seu valor
var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro: function (lado) {
        return this.lados * lado;
    },
};
console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// Palavra-chave This
// Faz sempre referência a um objeto

// Exercicios

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var meusDados = {
    nome: 'Rodrigo',
    sobrenome: 'Borge',
    idade: 35,
    cidade: 'Curitiba',
};
console.log(meusDados);

// Crie um método no objeto anterior, que mostre o seu nome completo
(meusDados.nomeCompleto = function (compName) {
    return `${this.nome} ${this.sobrenome}`;
}),
    console.log(meusDados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
};
carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'homem') {
            return 'Latir';
        } else {
            return 'Abanar o rabo';
        }
    },
};
console.log(cachorro.latir('mulher'));
