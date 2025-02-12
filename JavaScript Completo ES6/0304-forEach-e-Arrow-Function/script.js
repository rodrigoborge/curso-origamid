const imgs = document.querySelectorAll('img');
console.log(imgs);

let i = 0;
imgs.forEach(function (item, index, array) {
    // console.log(item, index, array);
});

// Transformar em Array
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
    console.log(item);
});
