// use strict berfungsi utk mengecek variabel jika ada yg salah
'use strict';

// lakukan pengecekan jika data yg di get/post/delete dll itu berhasil tampilkan status 200
exports.ok = function (values, res) {
    let data = {
        'status' : 200,
        'values' :values,
    };
     res.json(data);
     res.end();
}