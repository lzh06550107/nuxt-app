module.exports = {
  mode: 'jit', // ✨ 关键配置
  content: [
    './content/**/*.md', // 扫描 MDC 文件
    './node_modules/@nuxt/content/**/*.js', // 覆盖 Nuxt Content 的默认样式
    './node_modules/.c12/**/*.js' // 若使用 .c12 配置缓存
  ],
  // theme: {
  //   extend: {
  //     outline: {
  //       primary: ['2px solid #1fb6ff', '2px'] // 颜色和宽度
  //     }
  //   }
  // },
}
