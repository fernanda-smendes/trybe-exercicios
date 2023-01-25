//crie um algoritmo que imprima na tela o fatorial de 10.

let fat = 1;

for (let index = 10; index > 0; index -= 1) {
    fat *= index;
}

console.log(fat);

/* Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
*/

let word = "fernanda";
let reverter = "";

for (let index = 0; index < word.length; index += 1) {
    reverter += word[word.length - 1 - index];
}

console.log(reverter);