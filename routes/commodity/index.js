const router = require('koa-router')()
const query = require('../../mysql')

router.get('/get/:name', async ctx => {
  try {
    let name = ctx.params.name
    let sql = `SELECT * FROM commodity WHERE name LIKE '%${name}%'`
    let data = await query(sql)
    ctx.body = data
  } catch(err) {
    ctx.body = err
  }
})

module.exports = router.routes()