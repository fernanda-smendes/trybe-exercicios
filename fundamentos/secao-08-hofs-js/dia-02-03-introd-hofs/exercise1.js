const criaEmail = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase();
    return { nomeCompleto, email: `${email}@trybe.com`.split(" ").join("_") };
}
//console.log((criaEmail('Fernanda Mendes')));

const newEmployees = (elemento) => {
    const employees = {
      id1: elemento('Paçoca Mendes'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: elemento('Kayque Mendes'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: elemento('Fer Mendes'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(criaEmail));
 