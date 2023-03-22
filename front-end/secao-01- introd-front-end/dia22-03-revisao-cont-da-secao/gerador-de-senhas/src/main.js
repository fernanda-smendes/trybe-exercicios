import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

console.log(nanoid());
//console.log("hello, world")

const btnGerador = document.querySelector('button');
const senhaGerada = document.querySelector('h2');

btnGerador.addEventListener('click', () => {
// console.log(nanoid());
    const senhasAleatórias = nanoid();
    senhaGerada.innerHTML = senhasAleatórias;
    senhaGerada.addEventListener('click', (event) => {
        copy(event.target.innerHTML);
        alert('Senha Copiada!');
    });
});