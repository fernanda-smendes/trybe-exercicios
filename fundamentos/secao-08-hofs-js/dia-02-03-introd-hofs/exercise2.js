const checkNumber = (arrayStudent, arrayCorrect) => arrayCorrect === arrayStudent;

const resultado = (arrayStudent, elemento) => {
    const arrayCorrect = Math.floor((Math.random() * 5) + 1);
    return elemento(arrayStudent, arrayCorrect) ? 'Uhul, você acertou' : 'Poxa, não foi dessa vez';
};


console.log(resultado(2, checkNumber));


