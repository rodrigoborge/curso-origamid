// const animais = document.getElementById('animais');

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection);

// const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);

// const primeiraUl = document.querySelector('ul');
// console.log(primeiraUl);

// const linksInternos = document.querySelector('[href^="#"]');
// console.log(linksInternos);

// const animaisImg = document.querySelectorAll('.animais img');
// console.log(animaisImg[3]);

// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNODE = document.querySelectorAll('.grid-section');

// // primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML);
// console.log(gridSectionNODE);

// gridSectionNODE.forEach(function (item, index) {
//     console.log(item);
// });

// const arrayGrid = Array.from(gridSectionHTML);

// EXERCICIOS

// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll('img');
console.log(todasImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagem);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricaoH2 = document.querySelector('.animais-descricao h2');
console.log(animaisDescricaoH2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);
