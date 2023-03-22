import { nanoid } from "nanoid";

console.log(nanoid());
//console.log("hello, world")

const btnGerador = document.querySelector('button');
const senhaGerada = document.querySelector('h2');

btnGerador.addEventListener('click', () => {
   // console.log(nanoid());
   const senhasAleatórias = nanoid();
   senhaGerada.innerHTML = senhasAleatórias;
})