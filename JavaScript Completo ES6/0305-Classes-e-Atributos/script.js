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

// Read Only vs Writable
