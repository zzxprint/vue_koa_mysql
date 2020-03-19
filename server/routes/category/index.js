const router = require('koa-router')()

// 获取所有商品分类
router.get('/getAllCategory', async ctx => {
  let sql = `select * from category`
  try {
    let data = await ctx.$utils.query(sql)
    ctx.body = ctx.$utils.resbody(data)
  } catch (err) {
    ctx.body = ctx.$utils.resbody(err, false)
  }
})

module.exports = router.routes()