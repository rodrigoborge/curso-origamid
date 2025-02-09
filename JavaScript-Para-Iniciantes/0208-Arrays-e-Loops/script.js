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
}
