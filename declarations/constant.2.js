
//----------
// Example 2
// Object.defineProperty() - ES5 
// The variable could not be rewrited

var paths2 = {};

Object.defineProperty(paths2, 'main', {
  writable: false,
  value: '/home2/index'
});

// Will silently fail
paths2.main = 'Another thing :)';

console.log(paths2.main);
