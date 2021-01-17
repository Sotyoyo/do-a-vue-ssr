import createApp from './app.js'

export default ({ url }) => {
  // 此方法是在服务端调用的
  const { app, router } = createApp()

  router.push(url)

  return app // 每次都能产生一个新的应用
}
