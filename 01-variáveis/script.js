var nome = 'André';
var sobrenome = 'Prasel',
    cidade = 'Curitiba';  // Definindo várias variáveis em uma linha
var semDefinir;  // Variável ainda sem valor. Recebe undefined por padrão
var idade = 21;
var preco = 5;
var totalComprado = 25;
var totalPreco = totalComprado * preco;

console.log(nome, idade);  // Imprime informações no CONSOLE
console.log(sobrenome);
console.log(cidade);
console.log(totalPreco);
console.log(semDefinir);

// Hoisting
console.log(comida);
var comida = 'Pizza';
// retorna undefined
var bebida = 'Soda italiana';
console.log(bebida);
// retorna Soda italiana


// Mudando valor de variável
var numero = 33;
let letra = 'a';
const valor = 'valor';

numero = 34;  // é possível
letra = 'b';  // é possível
valor = 'outro valor';  // retorna erro


/*

COMENTÁRIO DE MULTIPLAS LINHAS

*/