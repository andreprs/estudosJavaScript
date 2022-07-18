// Booleand - exitem apenas dois tipos: false e true
var possuiGraduacao = true;
var possuiDoutorado = false;

// Os booleans ajudam muito na hora de fazer algum tipo de 
// verificação (testar se a expressão é verdadeira)

if(possuiGraduacao) {
    console.log('Possui graduação');
} else {
    console.log('Não possui graduação');
}

// para novas verificações antes do bloco final (else) usa-se o bloco else if

if(possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}


// Strings vazias são avalidas como falso
var nome = '';
if(nome) {
    console.log('SIM')
} else {
    console.log('NAO')
}
// false, 0, NaN, null, undefined e strings vazias retornam FALSO

// Operador lógico de negação: !
// Ele nega a operação booleana
if(!true) {  // retorna falso
    console.log('SIM');
} else {
    console.log('NAO');
}

// !! pode ser usada para descobrir se um valor é verdadeiro ou falso
// isso faz uma dupla negação


// Operadores de comparação
// >: maior que
// <: menor que
// >=: maior ou igual a
// <=: menor ou igual a
// ==: igual a (verificação não tão estrita)
// ===: igual a (verificação estrita)
// !=: diferente de (verificação não tão estrita)
// !==: diferente de (verificação estrita)

// &&: e (se condição1 E condição2)
    /* em caso de condicionais, esse operador irá retornar apenas verdadeiro ou falso, porém, ao usar ele em valores
     strings por exemplo, seu comportamento é diferente. Caso todos os valores sejam avaliados em verdadeiro,
     o operador irá retornar o último valor de todos os verdadeiros. Caso exista algum valor avaliado em falso,
     o retorno será o primeiro valor avaliado em falso. */

// ||: ou (se condição1 OU condição2)
    /* seu comportamente é semelhante ao &&, porém agora sempre retornando o primeiro valor avaliado em verdadeiro
    (em caso de algum valor, como uma string ou número) ou 
    apenas true ou false para condicionais */


// Switch case
// Com o switch é possível verificar se uma varíavel é igual a diferentes valores
// usando o case. O break é usado para parar a verificação caso seja verdadeiro

var corFavorita = 'Vermelho';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para rosas.');
        corFavorita = 'Amarelo';  // provando que a verificação continua caso não houver o break
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    default:
        console.log('Nenhuma é verdadeira.')  // só é executado quando todos os cases acima forem falsos
}
