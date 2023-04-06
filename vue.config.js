module.exports = {
  publicPath: "./", // 根路径
  outputDir: "dist", // 构建输出目录
  assetsDir: "assets", // 静态资源目录(js,css,img,fonts)
  lintOnSave: false, // 是否开启eslint保存检测,有效值（true||false||error)
  devServer: {
    port: 8000,
  },
};
