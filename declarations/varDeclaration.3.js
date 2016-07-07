'use strict';

var myNumber = 10;

function changeNumber() {
  myNumber = 25;
  // ... code
  var myNumber;

  console.log('inside', myNumber);
}

changeNumber();

console.log('out', myNumber);
