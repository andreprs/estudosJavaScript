/* ARRAYS
    Grupo de valores normalmente associados. Servem para guardar diferentes
    valores em uma única variável. */

var videoGames = ['Switch', 'PS4', 'XBox'];  // a definição é feita entre colchetes

console.log(videoGames[0]);  // os valores são acessados pelo indice [primeiro elemento é o 0]
console.log(videoGames[2]);

// Alguns métodos e propriedades de uma Array
//videoGames.pop();  // remove o último item e retorna ele
videoGames.push('3DS');  // adiciona ao final da array
console.log(videoGames.length); // retorna quanto itens há na array

// #============================================================================# //

// FOR loop (mais comum)
//  Faz algo repetidamente até que uma condição seja atingida

for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}
// o FOR possui três partes: início, condição, incremento


// While loop
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}


// Interagindo com uma array
var frutas = ['banana', 'abacaxi', 'maçã', 'laranja']
for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}  // um loop pode ser parado com o uso da palavra reservada break


// forEach: método que executa uma função para cada item da Array. É uma forma mais 
// simples de utilizar um loop com arrays (ou array-like)
var coisas = ['sabonete', 'garrafa', 'celular', 'chave']
coisas.forEach(function(item, index) {  // parâmetros: item, index e array
    console.log(item, index);  // o argumento item será atribuido dinamicamente
});
