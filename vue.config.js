module.exports = {
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      // 页面的模板文件
      template: 'public/index.html',
      // build 生成的文件名称  例： dist/index.html
      filename: 'index.html',
      title: 'Index Page',
    },
    article: {
      entry: 'src/pages/article/main.js',
      // 页面的模板文件
      template: 'public/index.html',
      // build 生成的文件名称  例： dist/article.html
      filename: 'article.html',
      title: 'Article Page',
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  }
}
