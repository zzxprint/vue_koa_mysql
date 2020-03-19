const router = require('koa-router')()

router.post('/login', async ctx => {
  let username = ctx.request.body.username
  try {
    let sql = `select * from user where username = '${username}'`
    let data = await ctx.$utils.query(sql)
    // 如果用户不存在
    if (data.length === 0) {
      ctx.body = ctx.$utils.resbody('', false, '用户不存在')
    } else {
      // 如果用户存在
      if (data[0].password === ctx.request.body.password) {
        ctx.body = ctx.$utils.resbody('登录成功')
      } else {
        ctx.body = ctx.$utils.resbody('', false, '密码错误')
      }
    }
  } catch (err) {
    ctx.body = ctx.$utils.resbody(err, false)
  }
})

module.exports = router.routes()