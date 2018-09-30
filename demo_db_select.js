var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

con.connect(function(err) {
    if ( err ) throw err;
    console.log('database connected');
    sql = "INSERT INTO customers (name, address) VALUES ('Raju', 'Venus More')";
    con.query(sql, function(err, result) {
        if ( err ) throw err;
        console.log('1 record inserted, ID: ' + result.insertId);
    });

});
