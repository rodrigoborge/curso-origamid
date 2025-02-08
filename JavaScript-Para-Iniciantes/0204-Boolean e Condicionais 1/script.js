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
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}