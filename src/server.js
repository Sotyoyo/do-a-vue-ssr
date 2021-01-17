import createApp from './app.js'

export default ({ url }) => {
  // 此方法是在服务端调用的
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()
    router.push(url)
    // 路由是异步组件，要等待路由加载完毕，组件准备完毕
    router.onReady(() => {
      // 才能拿到matchedCom
      const matchedComponents = router.getMatchedComponents()
      if (matchedComponents.length === 0) {
        // 表示前端也没有这个路由 应该是404
        reject({ code: 404 })
      } else {
        resolve(app) // 每次都能产生一个新的应用
      }
    })
  })
}
