const mysql = require('mysql2');

module.exports = require('mysql2').createPool({
    host     : process.env.SQL_HOST || 'localhost',
    user     : process.env.SQL_USER || 'root',
    password : process.env.SQL_PASSWORD || 'root',
    port     : process.env.SQL_PORT || 8889,
    database : process.env.SQL_DBNAME ,
    multipleStatements: process.argv[2] === 'migration' || false
});
