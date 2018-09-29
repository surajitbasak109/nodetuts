var fs = require('fs');

fs.unlink('deletingfile.txt', function(err) {
    if(err) throw err;
    console.log('File has been deleted.');
});
