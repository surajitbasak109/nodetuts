var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

con.connect(function (err){
    if ( err ) throw err;
    console.log('Database connected.');

    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['Anurag', 'Hakimpara'],
        ['Suman', 'Hayderpara'],
        ['Avinash', 'Matigara'],
        ['Upen', 'Chayanpara'],
        ['Ram', 'Viratnagar'],
        ['Shyam', 'Sukanta Nagar'],
        ['Partha', 'Salugara'],
        ['Ajit', 'Hayderpara'],
    ];
    con.query(sql, [values], function( err, result ) {
        if ( err ) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});
