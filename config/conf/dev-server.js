/**
 * @docs https://webpack.docschina.org/configuration/dev-server
 */
const webpackDevServerConfig = {
  client: {
    // 当出现编译错误或警告时，在浏览器中显示全屏覆盖。
    overlay: { errors: true, warnings: false },
    // 在浏览器中以百分比显示编译进度。
    progress: false,
    // 尝试重新连接客户端的次数
    reconnect: 3,
  },
  // 启用 [gzip compression](https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/)
  compress: true,
  // dev-server 启动后自动打开默认浏览器
  open: false,
  port: 8411,
  // 代理 - http-proxy-middleware
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: { '^/api': '' },
    },
  },
}

module.exports = webpackDevServerConfig
