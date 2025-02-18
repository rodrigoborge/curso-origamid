const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector('this.seletor');
    },
    
    ativar() {
        this.element().classList.add('ativar');
    },
};
