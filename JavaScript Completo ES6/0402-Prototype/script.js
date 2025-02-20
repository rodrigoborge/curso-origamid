function Pessoa(nome,idade){
    this.nome
    this.idade
}

Pessoa.prototype.andar = function(){
    return 'Pessoa andou'
}

const andre = new Pessoa('André', 28)

console.log(Pessoa.prototype)