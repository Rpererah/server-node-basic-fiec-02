const mysql = require('mysql2');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
port:3306,
password:'1234',
database: 'crud_php'
});

connection.connect((err) => {
if (err) throw err;
console.log('Conectado ao banco de dados MySQL');
});

module.exports = connection;