const koaJWT = require('koa-jwt')

// 排除不需要验证的路径
unlessPath = [
  /^\/login/, // 登录接口
  /^\/commodity/, // 商品接口
  /^\/category/, // 商品分类
  /^\/images/ // 静态资源
]

const auth = koaJWT({ secret: 'zzxprintSecretKey' }).unless({ path: unlessPath})

module.exports = auth