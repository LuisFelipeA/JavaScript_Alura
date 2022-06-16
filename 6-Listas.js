// console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// console.log("Destino possiveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);

// Usando listas

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
console.log("Destino possiveis:");
console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`); //add item na lista
console.log(listaDeDestinos);

//apagando Rio de Janeiro (contagem da posição começa do zero)
listaDeDestinos.splice(2,1); //começa apagar da segunda posição e apaga somente 1 item

console.log(listaDeDestinos);

console.log(listaDeDestinos[0]); //mostra o primeiro elemento da lista

