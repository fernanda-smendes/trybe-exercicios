
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  // yearSeasons: estações do ano.
const meses = [...yearSeasons.spring, ...yearSeasons.summer, ...yearSeasons.autumn, ...yearSeasons.winter];

console.log(meses);