function sum () {
    let total = 0;

    console.log(Array.isArray(arguments));

    arguments.forEach(function(n) {
        total = total + n;
    });

    console.log(total);
}

sum(4,5,6);