
let numbers = [40, 20, 2, 3];

let sum = numbers.reduce((soFar, next) => {
  return soFar + next; 
});

console.log(sum);
