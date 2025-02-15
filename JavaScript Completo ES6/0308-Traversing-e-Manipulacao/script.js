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

// Criar novo elemento
const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');
contato.appendChild(novoH1);

// EXERCICIOS

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais
