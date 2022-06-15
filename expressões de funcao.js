// declaração de função
function soma(n1, n2){
    return n1 + n2;
}


//expressão de função
const soma = function(n1, n2){return n1 + n2}
console.log(soma(1,1));


// as funções declaradas carregam logo na inicialização, então podemos chamar ela a qualquer momento
// ja as expressões só pode ser usada nas linhas abaixo dela