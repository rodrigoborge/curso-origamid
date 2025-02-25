function Pessoa(nome, idade) {
    this.nome;
    this.idade;
    this.abracar = function () {
        return 'Abracou';
    };
    this.andar = function () {
        return 'Andou pelo objeto!';
    };
}

Pessoa.prototype.andar = function () {
    return 'Pessoa andou';
};

Pessoa.prototype.nadar = function () {
    return 'Pessoa nadou';
};

const andre = new Pessoa('André', 28);

console.log(Pessoa.prototype);

//CONSTRUTORES NATIVOS

const pais = 'Brasil';
const cidade = new String('Rio');
