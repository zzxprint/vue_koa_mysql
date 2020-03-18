const mysql = require('mysql')

const pool  = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'zzxprint',
  database : 'yigou'
});

let db = (sql, values) => {
  return new Promise((resolve, reject) => {
    // 开始连接
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        // 连接成功,开始查询
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release() // 释放连接池
        })
      }
    })
  })
}

module.exports = db