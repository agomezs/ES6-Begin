function sum () {
    let total = 0;

    // console.log(Array.isArray(arguments));

    // for(let n = 0; n < arguments.length; n++) {
    //      total = total + arguments[n]; 
    // }

    // arguments.forEach(function(n) {
    //     total = total + n;
    // });

    // let args = Array.from(arguments);
    let args = [2, 5, ...arguments]; 

    if(Array.isArray(args)) {
        args.forEach(function(n) {
            total = total + n;
        });
    }    

    // for(let n of arguments) {
    //     total = total + n;    
    // }

    console.log(total);
}

sum(4,5,6);