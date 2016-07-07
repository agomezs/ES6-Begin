let obj = {
    a: {
        b: {
            c: 'This is the content'
            // c: ['uno', 'dos', 'tres']
            
        }
    }
};

// console.log(obj.a.b.c);

let { a } = obj;
let { b } = a;

console.log(a);
console.log(b);