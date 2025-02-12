// const imgs = document.querySelectorAll('img');
// console.log(imgs);

// let i = 0;
// imgs.forEach(function (item, index, array) {
//     // console.log(item, index, array);
// });

// Transformar em Array
// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function (item) {
//     console.log(item);
// });

// Arrow Function
// const imgs = document.querySelectorAll('img');

// let iu = 0;
// imgs.forEach((item) => {
//     console.log(iu++);
// });

// let i = 0;
// imgs.forEach(() => console.log(i++));

// EXERCICIOS
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

// Mostre o texto dos parágrafos no console
const paragrafosTag = document.getElementsByTagName('p');
console.log(paragrafosTag.innerText);

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => console.log(i++));

imgs.forEach(() => i++);
