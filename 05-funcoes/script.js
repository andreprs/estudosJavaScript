// Funções são blocos de códigos que podem ser reutilizados no código 
// podem receber parâmetros e retornar valores

function areaQuadrado(lado) {  // não necessariamente é necessário passar algum valor para a função
    return lado * lado;   // O return não é obrigatório. Caso não possua return
                         // a funão irá retornar undefined.
                        // Uma função pode retornar qualquer tipo de dado também
                       // inclusive outras funções.
}

/* DIFERENÇA ENTRE PARÂMETRO E ARGUMENTO: 
    parâmetros são definidos (ou não) na criação da função e 
    argumentos são passados (ou não) na execução da função

   Obs: mesmo que a função possua parâmetros, não necessáriamente ela 
   precisa receber algum argumento
*/

console.log(areaQuadrado(4));  // retorno é 16


// Funções podem ser argumentos e são chamadas de Callback, geralmente
// são funções que ocorrem após algum evento.
addEventListener('click', function() {  // função anônima (nome não definido)
    console.log('Clicou');
})
