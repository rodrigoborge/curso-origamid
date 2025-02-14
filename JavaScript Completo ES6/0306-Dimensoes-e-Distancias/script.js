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

// EXERCICIOS

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');
const imagemTop = primeiraImagem.offsetTop;
console.log(imagemTop);

// Retorne a soma da largura de todas as imagens
const todasImagens = document.querySelectorAll('img');
let somaLargura = 0;
todasImagens.forEach((imagem) => {
    somaLargura += imagem.offsetWidth;
});
console.log(somaLargura);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const selecionaLinks = document.querySelectorAll('a');

selecionaLinks.forEach((medida) => {
    if (medida.offsetWidth >= 48 && medida.offsetHeight >= 48) {
        console.log('Este elemento está de acordo');
    } else {
        console.log('Este elemento não está de acordo!!');
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu')
const browser = window.matchMedia('max-width: 720px').matches;
if(browser){
    menu.classList.add('mobile');
}