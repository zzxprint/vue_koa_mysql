const router = require('koa-router')()
const jwt = require('jsonwebtoken') // 引入jsonwebtoken

router.post('/login', async ctx => {
  let username = ctx.request.body.username
  try {
    let sql = `select * from user where username = '${username}'`
    let sqlData = await ctx.$utils.query(sql)
    // 如果用户不存在
    if (sqlData.length === 0) {
      ctx.body = ctx.$utils.resbody('', false, '用户不存在')
    } else {
      // 如果用户存在
      if (sqlData[0].password === ctx.request.body.password) {
        // 登录成功，生成token
        let payload = {
          username: ctx.request.body.username
        }
        let token = jwt.sign(payload, 'zzxprintSecretKey', {
          expiresIn: 12 * 60 * 60 // 授权12小时
        })
        // 返回信息
        let userInfo = sqlData[0]
        delete userInfo.password // 删除敏感信息
        let data = {
          userInfo: userInfo,
          token: token
        }
        ctx.body = ctx.$utils.resbody(data)
      } else {
        ctx.body = ctx.$utils.resbody('', false, '密码错误')
      }
    }
  } catch (err) {
    ctx.body = ctx.$utils.resbody(err, false)
  }
})

module.exports = router.routes()