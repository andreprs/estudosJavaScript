// Números
var idade = 28;
var gols = 1000;
var pi = 3.14;
var exp = 2e5;  // aceita exp negativo
// Em JavaScript a precisão é de até 15 dígitos

// Operadores aritméticos (com números)
var numero1 = 5;
var numero2 = 2;
var soma = numero1 + numero2; // 7
var subtracao = numero1 - numero2;  // 3
var multiplicacao = numero1 * numero2;  // 10
var divisao = numero1 / numero2;  // 2.5
var expoente = numero1 ** numero2;  // 25
var modulo = numero1 % numero2  // 1

// Operadores aritméticos (com strings)
var somaString = '100' + 50;  // 10050, concatenação
var subtracaoString = '100' - 50;  // 50, aqui há uma conversão
var multiplicacaoString = '100' * '2';  // 200
var divisaoString = 'Valor 100' / 2;  // NaN (Not a Numbe)
                                    // função isNaN()
console.log(isNaN(somaString));
console.log(isNaN(divisaoString));


// Ordem de precedência
// Segue o mesmo padrão da matemática básica
// É possível priorizar com os parênteses ( )

// Operadores aritméticos unários
var incremento = 5;
console.log(incremento++);  // adiciona 1 ao número
                            // aqui ainda retorna o valor anterior
console.log(incremento++);  // aqui ocorre outro incremente mas ainda
                            // retorna o valor anterior

console.log(incremento--);  // também funciona com subtração de 1
                            // porém ainda retorna o valor anterior
console.log(incremento)     // retorno final com o decremento

// caso o incremento ou decremento seja coloca na frente da variável
// o retorno já ocorre direto com a mudança
var x = 10;
console.log(++x)
console.log(--x)

// Existe também os operadores unários com apenas um simbolo (+ ou -)
// Eles tentam transformar o valor seguinte em número
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '21';
+idade // 28 (número)
-idade; // -28 (número)

// Em booleanos o retorno será 1 ou 0