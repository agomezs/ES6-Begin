
let numbers = [40, 20, 2, 3];

let sum = 0;

for(let n of numbers) {
  sum = sum + n; 
}

console.log(sum);


// ----------
// Other loops

// // Option 2
// numbers.forEach((n) => {
//   sum = sum + n;
// });

// // Option 3
// for(let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }

// https://blogs.msdn.microsoft.com/ie/2010/12/13/ecmascript-5-part-2-array-extras/