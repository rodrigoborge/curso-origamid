// É um conjunto de VARIÁVEIS E FUNÇÕES
var pessoa = {
    nome: 'Rodrigo',
    idade: 35,
    Cidade: 'Curitiba',
};
console.log(pessoa);

//Métodos
// É um propriedade que possui uma função no local do seu valor
var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    }
}
console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));