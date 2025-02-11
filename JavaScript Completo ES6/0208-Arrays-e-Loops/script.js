var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
console.log(videoGames);
console.log(videoGames[2]);

videoGames.pop(); // -> .pop remove o ultimo item do array
console.log(videoGames);

videoGames.push('3DS'); // -> .push adiciona um item no final do array
console.log(videoGames);

console.log('________________________');

// LOOPS e FOR
for (var numero = 0; numero <= 2; numero++) {
    console.log('Eu sou o for: ' + numero);
}

console.log('________________________');

// LOOPS WHILE
var i = 0;
while (i <= 2) {
    console.log('Eu sou o while: ' + i);
    i++;
}

console.log('________________________');

var videoGames2 = ['Switch', 'PS4', 'XBox', '3DS'];

for (var item = 0; item < videoGames2.length; item++) {
    console.log(videoGames2[item]);
    if (videoGames2[item] === 'XBox') {
        break;
    }
}

console.log('________________________');

// -> Essa é a maneira mais simples e indicada para fazer iteraçao no JavaScript
var frutas = ['Banana', 'Maçã', 'Uva', 'Morango', 'Mamão'];

frutas.forEach(function (item, index, array) {
    console.log(item, index, array);
});

console.log('------------ EXERCICIOS ------------');

//EXERCICIOS
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilCampeao.forEach(function (item) {
    console.log(`O brasil ganhou a copa de ${item}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
console.log(frutas);
for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if (frutas[i] === 'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length-1];
console.log(`A ultima fruta do array é ${ultimaFruta}`);