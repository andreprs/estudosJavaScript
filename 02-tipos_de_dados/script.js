var nome = 'André'; // string
var idade = 21; // number
var possuiFaculdade = true; // Boolean
var musica; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Objeto

console.log(typeof nome)


// Strings //
// Concatenação
var nome = 'André';
var sobrenome = 'Prasel';
var nomeCompleto = nome + sobrenome
console.log(nomeCompleto)

// é possível somar números à uma string. A variável que receber essa soma
// será do tipo string 

// Template String
console.log(`${nome} ${sobrenome}`)  // passando as variáveis entre as $chaves
                                    // como se fosse uma string formatada