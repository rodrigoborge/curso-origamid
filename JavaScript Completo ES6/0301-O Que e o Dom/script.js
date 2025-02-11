const href = window.location.href;
console.log(href);

const h1Selecionado = document.querySelector('h1');

// NODE

const h1Classes = h1Selecionado.classList;

function callBackh1() {
    console.log('Clicou em', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', function () {
    console.log('Clicou em', h1Selecionado.innerText);
});

// EXERCICIOS

// Retorne o url da página atual utilizando o objeto window
const urlAtual = window.location.href;
console.log(`Este é a URL que você está: ${urlAtual}`);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const selecionaElemento = document.querySelector('.titulo-principal');
console.log(selecionaElemento);

// Retorne a linguagem do navegador
const linguagemNavegador = navigator.language;
console.log(`Esta é o idioma do navegador ${linguagemNavegador}`);

// Retorne a largura da janela
const larguraJanela = window.innerWidth;
const alturaJanela = window.innerHeight;
console.log(`Esta é a largura da janela ${larguraJanela} x ${alturaJanela} pixels`);
