import mysql from "mysql";
const { MYSQL_CONNECTION ,ERROR_MESSAGES } = require('./constants.js');


const connection = mysql.createConnection({
  host: MYSQL_CONNECTION.HOST,
  user: MYSQL_CONNECTION.USER,
  password: MYSQL_CONNECTION.PASSWORD,
  database: MYSQL_CONNECTION.DATABASE
});


// MySQL 연결
connection.connect((err) => {
  if (err) {
    console.error(ERROR_MESSAGES.MYSQL_CONNECTION_ERROR + err.stack);
    return;
  }
  console.log('Connected to MySQL database as ID ' + connection.threadId);
});


module.exports = connection;
