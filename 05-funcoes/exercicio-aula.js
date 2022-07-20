// Crie um função para verificar se um valor é Truthy
function verificar(valor) {
    return !!valor;
}

console.log(verificar(0));
console.log(verificar('Olá'));


// Crie um função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}

console.log(`O perímetro do quadrado é ${perimetroQuadrado(4)}`);


// Crie uma função que retorne o seu nome completo. Parâmetros: nome, sobrenome
function nomeCompleto(nome, sobrenome) {
    return `O nome completo é: ${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Joãozinho', 'Nascimento dos Santos'));


// Crie uma função que verifica se um número é par
function ehPar(valor) {
    if (valor % 2 === 0) {
        return `${valor} é par.`;
    } else {
        return `${valor} é impar.`;
    }
}

console.log(ehPar(4))
console.log(ehPar(5))

// Crie uma função que retorne o tipo de dado do argumento passado nela
function tipoDeDado(valor) {
    return typeof(valor);
}

console.log(`O tipo de valor é: ${tipoDeDado('Gato')}`)
console.log(`O tipo de valor é: ${tipoDeDado(0)}`)


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer. 
addEventListener('click', function() {
    console.log('Maria Oliveira');
})
