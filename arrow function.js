// Arrow function geralmente é usada em codigos mais curtos
// Se comporta da mesma forma, mas em funções mais complexas, pode ficar confuso

function apresentar(nome){
    return `Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;

const somaArrow = (n1,n2) => n1 + n2;

console.log(apresentar("Luis"));
console.log(apresentarArrow("Luis"));
console.log(somaArrow(1,2));

//Arrow function com mais de uma linha

const somaNumerosPequenos = (n1,n2) => {
    if (n1 || n2 > 10){
        return "Somente numeros de 1 a 9!"
    }
    else{
        return n1+n2;
    }
}

console.log(somaNumerosPequenos(12,2));