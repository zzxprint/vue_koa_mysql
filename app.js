const Koa = require('koa')
const app = new Koa()
const router = require('./routes')

app.use(router)

app.listen(3000)