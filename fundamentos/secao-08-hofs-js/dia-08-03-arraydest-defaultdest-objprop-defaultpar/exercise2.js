const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const carro = ([nome, marca, ano]) => {
    return {
        nome,
        marca,
        ano
    }
}
console.log(carro(palio));
console.log(carro(shelbyCobra));
console.log(carro(chiron));