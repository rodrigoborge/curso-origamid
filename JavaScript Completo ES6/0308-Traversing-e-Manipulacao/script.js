// Traversing e Manipulação

// innerHTML
const h1 = document.querySelector('h1');
console.log(h1.innerHTML);

const animaisLista = document.querySelector('.animais-lista');
console.log(animaisLista.innerHTML);

// innerText
const animaisDescricao = document.querySelector('.animais-descricao');
console.log(animaisDescricao.innerText);

// Transversing
const lista = document.querySelector('.animais-lista');
console.log(lista.children);

// Selecionando e Movendo Elemento
const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

animais.appendChild(titulo);
