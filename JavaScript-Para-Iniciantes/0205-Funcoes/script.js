function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(24));

function pi() {
    return 3.14;
}
var total = 5 * pi();
console.log(total);

// Calculo IMC
function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}
console.log(imc(80, 1.8));
console.log(imc(124, 1.83));

// Parenteses executa a função
function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Eu gosto do céu';
    } else if (cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu nao gosto de cores';
    }
}
console.log(corFavorita('verde'));

// Argumentos podem ser funções
// addEventListener('click', function () {
//     console.log('OI');
// });

// Pode retornar qualquer tipo de dado
function terceiraIdade(idade) {
    console.log(typeof idade);
    if (typeof idade !== 'number') {
        return 'Por favor, preencha um numero';
    }

    if (idade >= 60) {
        console.log('É idoso');
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade(60));
