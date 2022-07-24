const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: '作业5-tabbar修复无法点击跳转路径/main.js',
    },
  },
  lintOnSave: false,
}
