//Nativos
//São aqueles definidos na especificaçao da linguagem e são implementados independente do host

//Exemplos:
Object;
String;
Array;
Function;

//Host
//São implementados pelo próprio ambiente, no caso, o navegador, como exemplo o DomList, HTMLCollection e outros. Em Node.js os objetos do host são diferentes, já que não temos o ambiente do browser

//Objetos do Browser
NodeList;
HTMLCollection;
Element;

//User
//São os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa

//Exemplo
const Pessoa = {
    nome: 'Rodrigo',
};
