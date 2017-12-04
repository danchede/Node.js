var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    port: '3306',
    database: 'test',
});

connection.connect();

var  insertSql = 'INSERT INTO student(s_id,s_name,s_number,s_password) VALUES(?,?,?,?)';
var  insertSqlParams = ['4', '钟超','44444444', '110'];
//增
connection.query(insertSql,insertSqlParams,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();