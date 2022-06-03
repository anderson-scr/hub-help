let mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hub_help'
});

let connect = connection.connect(function(err)
{
	if (err) {
		return console.error('error: ' + err.message);
	}

	console.log('Connected to the MySQL server.');
});

let query = connection.query(
	'SELECT * FROM Ocorrencia limit 8',
	function(err, results)
	{
		console.log(err);
		return results;
	}
);

let end = connection.end(function(err)
{
	if (err) {
		return console.log('error:' + err.message);
	}
	console.log('Close the database connection.');
});

export{mysql, connection, connect, query, end};