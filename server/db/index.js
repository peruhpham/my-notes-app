// /server/db/index.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Phu090204#my05', // thay bằng mật khẩu thực tế của bạn
    database: 'notes_app',
    waitForConnections: true,
    connectionLimit: 10,
    // queueLimit: 0,
});

module.exports = pool.promise(); // dùng .promise() để dùng async/await
// module.exports = pool; // dùng .promise() để dùng async/await

