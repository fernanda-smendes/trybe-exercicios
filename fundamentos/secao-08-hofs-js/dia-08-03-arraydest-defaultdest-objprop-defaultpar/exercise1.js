const myList = [5, 2, 3];

// escreva swap abaixo
const swap = (lista) => {
const [i1, i2, i3] = lista;

return [i3, i2, i1];
}

const swapReduzido = ([x, y, z]) => [z, y, x];

console.log(swapReduzido(myList));
console.log(swap(myList));