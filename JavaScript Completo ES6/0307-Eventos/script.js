const img = document.querySelector('img');

function callback(event) {
    console.log(event);
}

img.addEventListener('click', callback);
console.log(img);

const animaisLista = document.querySelector('.animais-lista');
function callbackLista(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);
}
animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^=http]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(event);
}

linkExterno.addEventListener('click', handleLinkExterno);
