var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
    console.log('É verdadeiro');
} else if (possuiDoutorado) {
    console.log('É falso');
} else {
    console.log('Não possui nada');
}

// Valor Lógico E - &&
var condicional = 5 - 5 && 5 + 5;

if (condicional) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

if (5 - 10 && 5 + 5) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// Valor Lógico OU - ||

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

// Switch Case

var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol');
        break;
    case 'Verde':
        console.log('Olhe para o floresta');
        break;
    default:
        console.log('Feche os olhos');
}

// Exercicio
