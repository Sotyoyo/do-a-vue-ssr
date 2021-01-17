import createApp from './app.js'

export default () => {
  // 此方法是在服务端调用的
  const { app, router } = createApp()
  return app // 每次都能产生一个新的应用
}
