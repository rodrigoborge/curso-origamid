const img = document.querySelector('img');

function callback() {
    console.log('Clicouu!!');
}

img.addEventListener('click', callback);
console.log(img);
