var connect = require('connect');
var serveStatic = require('serve-static');

const PORT = 8085;

console.log(__dirname);

connect().use(serveStatic(__dirname)).listen(8085, function(){
    console.log('Server running on http://localhost:' + PORT +'/...');
});
