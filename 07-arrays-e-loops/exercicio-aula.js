console.log('#######################################################################')
// Crie uma array com os anos que o brasil ganhou a copa
// 1956, 1962, 1970, 1994, 2002
var anos = [1956, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar no console
// a seguinte mensagem: O brasil ganhou a copa de ANO
anos.forEach(function(ano) {
    console.log(`O Brasil ganhou a copa de ${ano}`);
});


// Intereja com um loop nas frutas abaixo e pare ao chegar em pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if (frutas[i] === 'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array
var ultima_fruta = frutas[(frutas.length - 1)];
console.log(ultima_fruta)
