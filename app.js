const Koa = require('koa')
const app = new Koa()
const router = require('./routes') // 引入所有的路由

// 第一个中间件,注册方法到util中,可以全局使用
app.use(async (ctx, next) => {
  ctx.$utils = {
    resbody: require('./utils/resbody'),
    query: require('./utils/mysql')
  }
  await next()
})
// 路由中间件
app.use(router.routes(), router.allowedMethods())

app.listen(3000)