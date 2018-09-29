var http = require('http');
var fs = require('fs');

fs.writeFile('newtext.txt', 'Hello world!\nAnother word is going to be insert here', function(err) {
    if (err) throw err;
    console.log('Saved.');
});
