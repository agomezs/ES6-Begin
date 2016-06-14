
function calculatePriceV1(calc, price) {
  var finalPrice = price;

  calc.addRate(function () {
    finalPrice = finalPrice + 1;
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
