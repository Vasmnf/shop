
//import mysql = require('mysql2');
//import mysql from 'mysql2';
import {createConnection, QueryError, RowDataPacket} from "mysql2";
const connection = createConnection({
    host: 'localhost',
    user: 'root',
    database: 'atb',
    password: '123456'
});
// select all
connection.query('select * from cashier', (err: QueryError, results:object, fields:object)=>{
   console.log(err);
    console.log(results);
    console.log(fields);

});
//getTargetCashiers1
connection.query('select * from cashier where city="lviv" and yearsOfExperience>5 and (worksInShifts="Silpo" or worksInShifts="Arsen")', (err: QueryError, results:object, fields:object)=>{
    console.log(err);
    console.log(results);
    console.log(fields);

});

connection.end();