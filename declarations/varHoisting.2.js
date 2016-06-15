
// Problem #1: Blocks are not scopes

function calculatePrice(calc, price) {
  var finalPrice = price;

  calc.addRate(function () {

    finalPrice = finalPrice + 1;

    if (price >= 5) {
      var finalPrice = (price * 0.13) + price;
    }

  });

  return finalPrice;
}


const calculator = {
  addRate: function (fn) {
    // .. do something with the function
    fn();
  }
};

console.log(calculatePrice(calculator, 50));