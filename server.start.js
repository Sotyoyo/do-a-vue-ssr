const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const VueServerRenderer = require('vue-server-renderer')

const serverBundle = fs.readFileSync(
  path.resolve(__dirname, 'dist/main.bundle.js'),
  'utf8'
)
const template = fs.readFileSync(
  path.resolve(__dirname, 'dist/server.html'),
  'utf8'
)

// 根据实例
const renderer = VueServerRenderer.createBundleRenderer(serverBundle, {
  template,
})

router.get('/', async (ctx) => {
  ctx.body = await new Promise((resolve, reject) => {
    renderer.renderToString((err, html) => {
      if (err) reject(err)
      resolve(html)
    })
  })
})

app.use(router.routes())
app.listen(3000)