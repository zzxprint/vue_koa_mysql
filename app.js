const Koa = require('koa')
const app = new Koa()
const router = require('./routes') // 引入所有的路由

app.use(router.routes(), router.allowedMethods())

app.listen(3000)