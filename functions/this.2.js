
function Person(a) {
  this.age = a;

  setInterval(function growUp() {

    this.age++;
    console.log(this.age);

  }, 1500);
  
}

this.age = 1;

let ester = new Person(15);
