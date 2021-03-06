let transactions = 'P 130.56, C, P 12.37 , P 6.00, R 75.53, P 1.32';

let result = transactions
  // Break the string into an array on commas
  .split(",")
  // Keep just the purchase transactions ('P')
  .filter(s => s.trim()[0] === 'P' )
  // Get the price associated with the purchase
  .map(s => Number(s.trim().substring(1).trim()))
  // Sum up the quantities of purchases
  .reduce((acc, v) => acc + v);

console.log(result);
