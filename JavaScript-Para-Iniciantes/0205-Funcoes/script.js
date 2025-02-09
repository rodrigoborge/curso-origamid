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

// Escopo
function faltamVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - [paisesVisitados]} países`;
}
console.log(faltamVisitar(34));

//EXERCICIOS

// Crie uma função para verificar se um valor é Truthy
function valorVerdadeiro(valor) {
    if (valor > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(valorVerdadeiro(0));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}
console.log(perimetroQuadrado(3));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    var nome = 'Rodrigo ';
    var sobrenome = 'Borge';
    return nome + sobrenome;
}
console.log(nomeCompleto());

// Crie uma função que verifica se um número é par
function numeroPar(numero) {
    var par = numero % 2;
    if (par === 0) {
        return 'É par';
    } else {
        return 'É impar';
    }
}
console.log(numeroPar(543));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - [paisesVisitados]} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    var totalPaises = 193;
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
