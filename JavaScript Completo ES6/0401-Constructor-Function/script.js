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
    this.element = function () {
        return document.querySelector(seletor);
    },

    this.ativar = function () {
        this.element().classList.add('ativar');
    }
};

