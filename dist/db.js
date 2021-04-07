//import mysql = require('mysql2');
//import mysql from 'mysql2';
import { createConnection } from "mysql2";
var connection = createConnection({
    host: 'localhost',
    user: 'root',
    database: 'atb',
    password: '123456'
});
// connection.query('select * from cashier', (err: QueryError, results:object, fields:object)=>{
//    console.log(err);
//     console.log(results);
//     console.log(fields);
//
// });
connection.query('select * from cashier', function (err, rows) {
    console.log('The solution is: ', rows[0]['solution']);
});
//
// connection.query('select * from cashier where ',(err: QueryError, rows: RowDataPacket[]) => {
//     console.log('The solution is: ', rows[0]['solution']);
// });
connection.end();
//# sourceMappingURL=db.js.map