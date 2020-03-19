const router = require('koa-router')()

// 获取所有打折商品
router.get('/getDiscountCommodity', async ctx => {
  let sql = `select * from commodity where discountPrice is not null`
  try {
    let data = await ctx.$utils.query(sql)
    ctx.body = ctx.$utils.resbody(data)
  } catch (err) {
    ctx.body = ctx.$utils.resbody(err, false)
  }
})

// 获取所有商品
router.get('/getAll', async ctx => {
  let sql = `select * from commodity`
  try {
    let data = await ctx.$utils.query(sql)
    ctx.body = ctx.$utils.resbody(data)
  } catch (err) {
    ctx.body = ctx.$utils.resbody(err, false)
  }
})

// 根据分类ID查询商品
router.get('/getCommodityById/:id', async ctx => {
  let id = ctx.params.id
  let sql = `select * from commodity where categoryId = ${id}`
  try {
    let data = await ctx.$utils.query(sql)
    ctx.body = ctx.$utils.resbody(data)
  } catch (err) {
    ctx.body = ctx.$utils.resbody(err, false)
  }
})

module.exports = router.routes()