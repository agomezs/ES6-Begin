'use strict';

function ajax(url, callback, method = 'GET') {
    // method = method || 'GET';
    let p = new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        
        xhr.onload = function () {
            if(xhr.status >= 200 && xhr.status < 400) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(console.error( req.statusText));
            }
        }; 
        xhr.onerror = function () {
            reject(console.error("Something went wrong..."));  
        };
        xhr.send();
    });

    p.then((results) => callback(results));
};

module.exports = ajax;
