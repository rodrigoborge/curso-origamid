const animais = document.getElementById('animais');

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[3]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNODE = document.querySelectorAll('.grid-section');

// primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNODE);
