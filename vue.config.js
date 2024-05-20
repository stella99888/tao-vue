const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    return {
      module: {
        // console.log loader，打包时执行
        // rules: [
        //   {
        //     // 用于.vue文件
        //     test: /\.vue$/,
        //     exclude: /node_modules/,
        //     loader: path.resolve(__dirname, './src/loader/console'),
        //   },
        // ],
      },
    }
  },
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 8080,
    webSocketServer: false, // 不配置报错，WebSocketClient.js:49 WebSocket connection to 'ws://192.168.173.199:8081/ws' failed: 
    https: false,
    // hotOnly: true,
    proxy: {
      // 全局只会出现一次 标识'/zhou'和一次 "http://localhost:9999"
      "/zhou": {
        // target: "http://localhost:9999",
        target: "http://ashuai.work",
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: {
          "/zhou": ""
        },
      },
    },
  }
})
