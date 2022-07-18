// verificar se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 21;
var idadeIrma = 32;

if(minhaIdade > idadeIrma) {
    console.log('É maior.');
} else if (minhaIdade < idadeIrma) {
    console.log('É menor');
} else {
    console.log('É igual.')
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);  // 5 - ' ' é como se fosse 5 - 0
// R: retornará 3, pois é o último valor avaliado como verdadeiro da expressão
console.log(expressao);  // provando


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'André';  // true
var idade = 28;  // true
var possuiDoutorado = false;  // false
var empregoFuturo;  // false, pois é undefined
var dinheiroNaConta = 0;  // false, pois é 0

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)  // verificação

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil possui mais habitantes.');
} else {
    console.log('China possui mais habitantes');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');  // Cão, pois é o último valor avaliado como verdadeiro
} else {
    console.log('Falso');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');  // isso, pois Gato não é igual a gato
}