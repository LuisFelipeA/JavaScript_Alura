function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(14,6))


function nomeIdade(nome, idade){
    return `Ola ${nome}. Voce tem ${idade} anos!`;
}

console.log(nomeIdade("Luis", 24))


//Na função multiplica, o n1 e n2 estão recebendo '1' como valor padrão, que sera usado caso o usuario não passa algum dos parametros
function multiplica(n1 = 1, n2 = 1){
    return n1 * n2
}

console.log(multiplica(10,2));
console.log(multiplica(10));