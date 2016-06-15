# [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
Hoisting is JavaScript's behavior of moving declarations to the top of a scope (the global scope or the current function scope).

That means that you are able to use a function or a variable before it has been declared, or in other words: a function or variable can be declared after it has been used already.

http://jsbin.com/vucotap/4/edit?html,js,console,output


> The scope of a var in JavaScript is like the bucket-of-paint tool in Photoshop. It extends in both directions from the declaration, forwards and backwards, and it just keeps going until it reaches a function boundary. Since this variable t’s scope extends so far backwards, it has to be created as soon as we enter the function. This is called hoisting.
https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/