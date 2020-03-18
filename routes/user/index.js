const router = require('koa-router')()
const query = require('../../mysql')

router.get('/get', async ctx => {
  try {
    let sql = 'SELECT * FROM USER'
    let data = await query(sql)
    ctx.body = data
  } catch (err) {
    ctx.body = err
  }
})

module.exports = router.routes()