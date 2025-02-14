const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.scrollHeight;
console.log(height);

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

console.log(window.innerWidth, window.innerHeight, window.outerWidth, window.outerHeight, window.scrollY, window.scrollX);

const small = window.matchMedia('max-width: 600px').matches;
if (small) {
    console.log('Usuário Mobile');
} else {
    console.log('Usuário Desk');
}
