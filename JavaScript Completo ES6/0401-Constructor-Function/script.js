// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector('this.seletor');
//     },

//     ativar() {
//         this.element().classList.add('ativar');
//     },
// };

// Dom.ativar();
// Dom.seletor = 'ul';
// Dom.ativar();

// FUNCAO SELETORA
function Dom(seletor) {
    (this.element = function () {
        return document.querySelector(seletor);
    }),
        (this.ativar = function () {
            this.element().classList.add('ativar');
        });
}

const li = new Dom('li');
const ul = new Dom('ul');

// EXERCICIOS

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');
    },
};

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
