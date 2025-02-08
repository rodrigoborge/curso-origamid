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
var condicional = (5 - 5) && (5 + 5);

if (condicional) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

if ((5 - 10) && (5 + 5)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// Valor Lógico OU - ||