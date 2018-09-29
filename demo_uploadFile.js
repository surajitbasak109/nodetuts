var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    formidable = require('formidable');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath = files.filetoupload.path;
            var newpath = './uploads/'+files.filetoupload.name;
            fs.rename(oldpath, newpath, function(err) {
                if (err) throw err;
                res.write('File uploaded and moved.');
                res.end();
            });
        });
    }
    else {
        fs.readFile('fileupload.html', function (err, data) {
            if (err) throw err;
            res.write(data);
            return res.end();
        });
    }
}).listen(8080);

console.log('Listening to http://localhost:8080');
