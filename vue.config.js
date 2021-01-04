module.exports = {
  // 在vue-cli.3.3版本后 baseUrl被废除了
  publicPath: '/', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  assetsDir: '', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  lintOnSave: true, // 是否在保存的时候检查
  //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  runtimeCompiler: true,
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  css: {
    // extract: true, // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    sourceMap: false, // 开启 CSS source maps
    loaderOptions: {}, // css预设器配置项
    // modules: false // 启用 CSS modules for all css / pre-processor files.
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    requireModuleExtension: true
  },
  devServer: {
    // 环境配置
    host: 'localhost',
    hot: true, //热加载
    port: 8002,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    open: false //配置自动启动浏览器
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  }
}
