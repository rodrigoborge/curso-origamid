// Manipulando Classes
const menu = document.querySelector('.menu');
menu.classList.add('ativo');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
    menu.classList.add('possuiAzul');
} else {
    menu.classList.add('naoPossuiAzul');
}

menu.className += ' Vermelho';

console.log(menu.className);
console.log(menu.classList);

// Attributes
const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

// GETAttribute e SETAttribute
const img = document.querySelector('img');
console.log(img.getAttribute('src'));

// Adiciona TAG <alt> no html
const srcImg = img.setAttribute('alt', 'é uma raposa');

// Verifica se possui ou nao a propriedade
const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

// Read Only
// Não permitem a mudança de seus valores, apenas leitura
// Para saber se é ou não read only é apenas buscando a documentação
const carro = {
    portas: 4,
    andar: function (km) {
        console.log(`Andou ${km}km`);
    },
};

// EXERCICIOS
// Adicione a classe ativo a todos os itens do menu
const addAtivo = document.querySelectorAll('.menu a');
addAtivo.forEach((item) => {
    item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
addAtivo.forEach((item) => {
    item.classList.remove('ativo');
});

addAtivo[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(possuiAtributo);
});

// Modifique o href do link externo no menu
const links = document.querySelector('a[href^="#"]');
links.setAttribute('href', 'https//:google.com');