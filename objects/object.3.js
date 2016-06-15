// OBJECT

let myObject = {}; // new Object()

myObject.status = 'active';

console.log('object: ', myObject);


// ARRAY

let myArray = []; // new Object()


myArray.push('Loricariidae');
myArray.push('Ancistrus');

myArray.status = "active";


console.log('array:  ', myArray);

for (var a of myArray) {
    console.log(a);
}