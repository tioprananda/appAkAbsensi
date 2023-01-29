// const express memanggil library express js
const express = require('express');

// bodyparser memanggil library body-parser
const bodyParser = require('body-parser');

// app express menjalankan express js
const app = express();

// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// buat portnya 3000
 app.listen(3000, () => {
    console.log(`Server started on port`);
 });