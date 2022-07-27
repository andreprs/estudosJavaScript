// Operadores de atribuição (formas de abreviação)

var x = 5;
var y = 10;

x += y;  // x = x + y
x += y;  // x = x + y
x += y;  // x = x + y
x /= y;  // x = x / y
x **= y;  // x = x ** y
x %= y;  // x = x % y


// Operador ternário: abreviação de condicionais com if e else
// Usado quando é necessário atribuir um valor para uma variável que depende de uma condição
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber.' : 'Não pode beber.';
// condição ? true : false
console.log(podeBeber);

// Outra maneira que há de abreviar um if e else é não utilizando as chaves, porém
// só é possível fazer isso caso o retorno do if e else possuem apenas uma linha.
// Além disso é possível deixar a condição e retorno e uma linha só
var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui Faculdade');
else console.log('Não possui faculdade.');
/* Ou
if(possuiFaculdade)
    console.log('Possui faculdade.');
    else
    console.log('Não possui faculdade.'); */
