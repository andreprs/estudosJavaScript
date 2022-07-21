console.log('=============================================================');
// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades: nome e sobrenome. Deve ter também um método
// que mostre seu nome completo
var dadosPessoas = {
    nome: 'André',
    sobrenome: 'Prasel',
    mostrarNome() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}

dadosPessoas.mostrarNome()


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    late(pessoa) {
        if (pessoa === 'homem') {
            console.log('Latiu.');
        } else {
            console.log('Não latiu.');
        }
    }
}

cachorro.late()
