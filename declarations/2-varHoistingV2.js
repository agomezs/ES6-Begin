
function calculatePriceV1(calc, price) {
  var finalPrice = price;

  calc.addRate(function () {

    finalPrice = finalPrice + 1;

    // if (price >= 5) {
    //   // var finalPrice = (price * 0.13) + price;
    // }

  });

  return finalPrice;
}


const calculator = {
  addRate: function (fn) {
    // .. do something with the function
    fn();
  }
};

l(calculatePrice(calculator, 50));


function l(i){
  console.log(i);
}