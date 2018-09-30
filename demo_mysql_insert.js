var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Database connected');

    var sql = "INSERT INTO customers (name, address) VALUES ('Surajmukhi Tea', 'Salugara')";
    con.query(sql, function(err, result) {
        if ( err ) throw err;
        console.log("one record inserted.");
    });
});
