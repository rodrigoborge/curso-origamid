var videoGames = ['Switch', 'PS4', 'XBox'];
console.log(videoGames);
console.log(videoGames[2]);

videoGames.pop(); // -> .pop remove o ultimo item do array
console.log(videoGames);

videoGames.push('3DS'); // -> .push adiciona um item no final do array
console.log(videoGames);

// LOOPS e FOR
for (var numero = 0; numero <= 10; numero++) {
    console.log(numero);
}

// LOOPS WHILE
var i = 0;
while (i <= 10) {
    console.log('Eu sou o while: ' + i);
    i++;
}
