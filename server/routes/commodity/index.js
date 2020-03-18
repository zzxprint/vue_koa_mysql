const router = require('koa-router')()

router.get('/get/:name', async ctx => {
  let name = ctx.params.name
  let sql = `SELECT * FROM commodity WHERE name LIKE '%${name}%'`
  try {
    let data = await ctx.$utils.query(sql)
    ctx.body = ctx.$utils.resbody(data)
  } catch (err) {
    ctx.body = ctx.$utils.resbody(err, false)
  }
})

module.exports = router.routes()