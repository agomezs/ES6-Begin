let transactions = 'P 130.56, C, P 12.37 , P 6.00, R 75.53, P 1.32';

let result = transactions
  .split(',')
  .filter(s => s.trim()[0] === 'P')
  .map(s => Number(s.trim().substring(1).trim()))
  .reduce((acc, v) => acc + v);

console.log(result);