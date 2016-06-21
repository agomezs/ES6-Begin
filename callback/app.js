// import ajax from './api.js';
'use strict';

const ajax = require('./api.js');

const USERS_URL = 'https://randomuser.me/api/';

// let results = ajax(USERS_URL).then(function(response) {
//     console.log('sss', response);
//     return  response;
// });

let users = [];

function initVariables(urs) {
    users = urs;
    console.log(users.results[0].email);
}

ajax(USERS_URL, initVariables);
