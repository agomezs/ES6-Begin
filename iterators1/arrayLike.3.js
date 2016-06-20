function sum () {
    let total = 0;

    console.log(Array.isArray(arguments));

    // How do I calculate the total

    arguments.forEach(function(n) {
        total = total + n;
    });

    console.log(total);
}

sum(4,5,6);