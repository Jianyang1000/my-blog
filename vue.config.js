const path = require('path')
const resolve = function(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath:'./',
  chainWebpack: config => {
    config.resolve.alias
        .set('@', resolve('src'))
        .set('views', resolve('src/views'))
    config.optimization.runtimeChunk('single')
  },
  devServer: {
    /*before(app) {app.get('/api/comment', (request, response) => {let commentLists = [{name: '小张', author: 'Jianyang', content: '今天的天气很美', article_id: '1', create_time: ''}, {name: '李飞飞', author: 'Zhangfei', content: '什么意思?', article_id: '1', create_time: ''}, {name: '马超', author: 'Guanyu', content: '有没有这样一首歌', article_id: '1', create_time: ''}, {name: '美美', author: '帅哥', content: '什么情况什么情况', article_id: '1', create_time: ''}, {name: '小张', author: 'Jianyang', content: '哈哈哈哈哈哈哈嘎嘎', article_id: '1', create_time: ''}, {name: '勇士', author: 'Laker', content: '5555555', article_id: '1', create_time: ''},]response.json(commentLists)})app.get('/api/delete_article', (request, response) => {let articleLists = [{title: 'Vue中增删改查的坑', cover: '', category: '', tag: '', is_encrypt: 'true', created_time: '', updated_time: '', delete_time: ''}, {title: '使用mongodb和mongoose', cover: '', category: '', tag: '', is_encrypt: 'true', created_time: '', updated_time: '', delete_time: ''}, {title: '索引是怎么回事', cover: '', category: '', tag: '', is_encrypt: 'true', created_time: '', updated_time: '', delete_time: ''}, {title: '页面性能优化实战', cover: '', category: '', tag: '', is_encrypt: 'true', created_time: '', updated_time: '', delete_time: ''}, {title: '简述算法与数据结构', cover: '', category: '', tag: '', is_encrypt: 'true', created_time: '', updated_time: '', delete_time: ''}, {title: '时间复杂度的计算', cover: '', category: '', tag: '', is_encrypt: 'true', created_time: '', updated_time: '', delete_time: ''}]response.json(articleLists)})app.get('/api/manage_article', (request, response) => {let articleLists = [{title: 'Vue中增删改查的坑', cover: '', category: '', tag: '', is_encrypt: 'true', created_time: '', updated_time: '', delete_time: ''}, {title: '使用mongodb和mongoose', cover: '', category: '', tag: '', is_encrypt: 'true', created_time: '', updated_time: '', delete_time: ''}, {title: '索引是怎么回事', cover: '', category: '', tag: '', is_encrypt: 'true', created_time: '', updated_time: '', delete_time: ''}, {title: '页面性能优化实战', cover: '', category: '', tag: '', is_encrypt: 'true', created_time: '', updated_time: '', delete_time: ''}, {title: '简述算法与数据结构', cover: '', category: '', tag: '', is_encrypt: 'true', created_time: '', updated_time: '', delete_time: ''}, {title: '时间复杂度的计算', cover: '', category: '', tag: '', is_encrypt: 'true', created_time: '', updated_time: '', delete_time: ''}]response.json(articleLists)})app.get('/api/dashboard', (request, response) => {response.json(cardLists)})},*/
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}