const router = require('koa-router')()

router.post('/getUserInfo', async ctx => {
  let userId = ctx.request.body.userId
  try {
    let sql = `select * from user where userId = '${userId}'`
    let data = await ctx.$utils.query(sql)
    ctx.body = ctx.$utils.resbody(data)
  } catch (err) {
    ctx.body = ctx.$utils.resbody(err, false)
  }
})

module.exports = router.routes()