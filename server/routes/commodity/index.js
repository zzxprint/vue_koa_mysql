const router = require('koa-router')()

// 获取所有商品
router.get('/getAll', async ctx => {
  let sql = `SELECT * FROM commodity`
  try {
    let data = await ctx.$utils.query(sql)
    ctx.body = ctx.$utils.resbody(data)
  } catch (err) {
    ctx.body = ctx.$utils.resbody(err, false)
  }
})

module.exports = router.routes()