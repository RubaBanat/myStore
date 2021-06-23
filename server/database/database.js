const mysql = require('mysql2');

const connection = mysql.createConnection({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
});

connection.connect((err) => {
	if (err) {
		return console.error(err.stack);
	}
	return console.log('connected successfully');
});

module.exports = connection;
