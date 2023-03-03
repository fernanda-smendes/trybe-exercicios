const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparacao = (respostasCorretas, respostasEstudantes) => {
    if (respostasCorretas === respostasEstudantes) {
        return 1;
    } if (respostasEstudantes === 'N.A') {
        return 0;
    }
    return -0.5;
}

const pontuacao = (respostasCorretas, respostasEstudantes, resultado) => {
    let contador = 0;
    for (let index = 0; index < respostasCorretas.length; index += 1) {
        const retornoResultado = resultado(respostasCorretas[index], respostasEstudantes[index]);
        contador += retornoResultado;
    }
    return `Resultado Final: ${contador} pontos`;
}
console.log(pontuacao(RIGHT_ANSWERS, STUDENT_ANSWERS, comparacao));