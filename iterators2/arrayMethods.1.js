let transactions = 'P 130.56, C, P 12.37 , P 6.00, R 75.53, P 1.32';

let result = transactions
  // Break the string into an array on commas
  .split(",")
  // Keep just the purchase transactions ('P')
  .filter(function(s) {
    return s.trim()[0] === 'P'
  })
  // Get the price associated with the purchase
  .map(function (s) {
   return Number(s.trim().substring(1).trim())
  })
  // Sum up the quantities of purchases
  .reduce(function(acc, v) { 
    return acc + v
  });

console.log(result);
