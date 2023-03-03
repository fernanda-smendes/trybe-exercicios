const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
  const autor1947 = () => {
   return books.find((elemento) => elemento.author.birthYear === 1947).author.name;
  };
  console.log(autor1947());

  const menorNome = () => {
    let nomeDoLivro;

    books.forEach((elemento) => {
      if (!nomeDoLivro || elemento.name.length < nomeDoLivro.length) {
        nomeDoLivro = elemento.name;
      }
    })
    return nomeDoLivro;
  }
  console.log(menorNome());

  const livroCom26Caract = () => {
    books.find((elemento) => elemento.name.length === 26);
  }

  console.log(livroCom26Caract());

  const seculoXX = () => {
    return books.every((elemento) => elemento.author.birthYear >= 1901 && elemento.author.birthYear <= 2000);
  }

  console.log(seculoXX());
  
  const lancadoAnos80 = () => {
    return books.some((elemento) => elemento.releaseYear >= 1980 && elemento.releaseYear <= 1989)
  }
  console.log(lancadoAnos80());


  const resultadoEsperado = false;

  const autorUnico = () => {
    return books.every((elemento) => 
      !books.some((temElemento) => 
        (temElemento.author.birthYear === elemento.author.birthYear) && (temElemento.author.name !== elemento.author.name)));
  }
