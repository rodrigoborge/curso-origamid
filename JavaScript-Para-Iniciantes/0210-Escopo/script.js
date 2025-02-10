// CONST -> Mantém o escopo no bloco, impede a redeclaração e impede a modificação so valor da variável, evitando bugs no código
const semana = 'Sexta';
console.log(semana);
// const semana = 'Quinta'; // -> Erro de atribuiçao por já existir a mesma variável no código

// LET -> Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável

// EXERCÍCIOS
// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
}

console.log('------------');

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

console.log('------------');

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero <= 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log('------------');
console.log(total);