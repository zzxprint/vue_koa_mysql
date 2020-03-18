const router = require('koa-router')()

router.get('/get', async ctx => {
  try {
    let sql = 'SELECT * FROM USER'
    let data = await ctx.$utils.query(sql)
    ctx.body = ctx.$utils.resbody(data)
  } catch (err) {
    ctx.body = ctx.$utils.resbody(err, false)
  }
})

module.exports = router.routes()