var mysql = require('mysql');

con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

con.connect(function(err) {
    if( err ) throw err;
    console.log('Connected');

    var sql = "CREATE TABLE customers (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL)";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log('Customer table has been created.');
    });
});
