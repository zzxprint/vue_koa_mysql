const router = require('koa-router')()
const mysql = require('../../mysql')

router.get('/get', async ctx => {
  let sql = 'SELECT * FROM USER'
  let data = await mysql(sql)
  ctx.body = data
})

module.exports = router.routes()