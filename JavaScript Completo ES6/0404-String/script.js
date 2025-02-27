//Replace
//Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens);

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.');
console.log(preco);

//Split
//Divide a string de acordo com o padrão passado e retorna uma array
const arrayLista = listaItens.split(', ');
console.log(arrayLista);
