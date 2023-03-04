const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const peopleOrder = people.sort((a, b) => {
     return a.age - b.age
  })
  console.log(people);

  const casa = ['Paçoca', 'Fer', 'Kayque'];

const pessoaCasa = casa.map((elemento) => {
    const cadastro = {};
    cadastro.nome = casa;
    cadastro.local = 'SC';
    return cadastro
})

console.log(pessoaCasa);

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);