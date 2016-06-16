// 'use strict';

// ES6
// Use Object.freeze() to make object immutable

const paths = Object.freeze({  main: '/home', clients: '/clients' });

paths.main = '/patitos';
paths.clients = '/patitos';

console.log(paths);
