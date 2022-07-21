// Objetos são um conjunto de variáveis e funções, que são chamadas de 
// propriedades e métodos. Propriedades e métodos consistem em nome (chave)
// e valor.

var pessoa = {  // Objetos sempre são criados a partir de chaves.
    nome: 'André',
    idade: 21,
    profissao: 'estudante',
    possuiFaculdade: true,
}

pessoa.altura = 1.91;  // é possível criar propriedades e métodos de um objeto fora da criação dele

console.log(typeof pessoa)
pessoa.nome;  // 'André'
pessoa.idade;  // 21
console.log(pessoa.altura);


// Métodos: é uma propriedade que possui uma função no local do seu valor
var quadrado = {
    lados: 4,
    area: function(lado) {  
        return lado * lado;
    },
    perimetro(lado) {  // é possível abreviar a definição da função também
        return this.lados * lado;  // this.lado está se referindo a variável presente no próprio objeto
    },
}

// Para acessar alguma propriedade ou método de um objeto sempre é utilizado o ponto ( . )
quadrado.lados;  // 4
quadrado.area(5);  // 25
quadrado.perimetro(5);  // 20


// Os objetos servem para organizar o código em pequenas partes reutilizáveis.
Math.PI;  // 3.14
Math.random();  // número aleatório

var pi = Math.PI;
console.log(pi);  // 3.14
// acima, console é um objeto e log() é um método


// Object é um objeto padrão do JavaScript
console.log(Object());
// Todo objeto criado herda de Object, ou seja, possui as mesmas propriedades e métodos
console.log(pessoa.hasOwnProperty('nome'));  // herdou hasOwnProperty de Object


// Em JavaScript, strings, números, boolean, objetos e mais, possuem propriedades e métodos. 
// Por isso tudo em JavaScript é objeto.
var nome = 'Andre';
console.log(nome.length);
console.log(nome.charAt(3));  // índice do caracter


// Elementos do DOM
// Praticamente todos os efeitos com JS são feitos utilizando
// propriedades e métodos de objetos do DOM.

var btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    console.log('Clicou.')
})
