// myName variable is leak to the global scope.

let aName = 'Juan';

function printName(name) {
    myName = name;
    console.log(myName);
}

printName(aName);

console.log(myName);