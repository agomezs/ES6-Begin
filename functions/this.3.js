
function Person(a) {
  let self = this; // Also called "that"

  self.age = a;

  setInterval(function growUp() {

    self.age++;    
    console.log(self.age);

  }, 1500);
  
}

let ester = new Person(15);
