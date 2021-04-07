"use strict";
exports.__esModule = true;
//import mysql = require('mysql2');
//import mysql from 'mysql2';
var mysql2_1 = require("mysql2");
var connection = mysql2_1.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'atb',
    password: '123456'
});
// select all
// connection.query('select * from cashier', (err: QueryError, results:object, fields:object)=>{
//    console.log(err);
//     console.log(results);
//     console.log(fields);
//
// });
//getTargetCashiers1
connection.query('select * from cashier where city="lviv" and yearsOfExperience>5 and (worksInShifts="Silpo" or worksInShifts="Arsen")', function (err, results, fields) {
    console.log(err);
    console.log(results);
    console.log(fields);
});
connection.end();
