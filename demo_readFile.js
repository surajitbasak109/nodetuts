var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demofile.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

console.log('listening to 127.0.0.1:8080');
