const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  //const expectedResult = 20;
  const trasLetra = names.join('').toLowerCase().split('');
  console.log(trasLetra);

  const countA = (arr) => arr.reduce((acumulador, letras) => {
    return letras === 'a' ? acumulador += 1 : acumulador;
  }, 0);

  console.log(countA(trasLetra));