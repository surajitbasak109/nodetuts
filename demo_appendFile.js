var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.appendFile('newtext.txt', 'Hello world!', function(err) {
        if ( err ) throw err;
        console.log('Saved.');
    });
}).listen(8080);

console.log('listening to 127.0.0.1:8080');
