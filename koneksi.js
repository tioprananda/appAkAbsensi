// panggil libary mysql
let mysql = require('mysql');

// buat koneksi database
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'db_absensi'
});

// cek koneksi, apakah sudah terhbung dgn mysql
conn.connect((err)=> {
    if(err) throw err;
    console.log(`Mysql terkoneksi`)
});

module.exports = conn;