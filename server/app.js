const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser') // 解析post请求体
const router = require('./routes') // 引入所有的路由
const path = require('path') // 引入node的path模块
const static = require('koa-static') // 静态资源中间件

// 第一个中间件,注册方法到util中,可以全局使用
app.use(async (ctx, next) => {
  ctx.$utils = {
    resbody: require('./utils/resbody'),
    query: require('./utils/mysql')
  }
  await next()
})

app.use(bodyparser()) // 要放在路由请求前，才能解析路由参数

app.use(static(path.join( __dirname, './static'))) // 静态资源中间件
app.use(router.routes(), router.allowedMethods()) // 路由中间件

app.listen(3000)