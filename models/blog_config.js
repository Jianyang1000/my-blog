//引入mongoose模块
const mongoose = require('mongoose')
//定义数据模型，可以看到，我们下面创建了一个表，表中的数据有name、age、sex等字段，并且这些字段的数据类型也定义了，最后将model导出即可
const blogConfigSchema = mongoose.Schema({
    blog_name: String,
    avatar: String,
    sign: String,
    wxpay_qrcode: String,
    alipay_qrcode: String,
    github: String,
    view_password: String,
    salt: String
}, { collection: 'blog_config'})
//这里mongoose.Schema最好要写上第二个参数，明确指定到数据库中的哪个表取数据，我这里写了myhreo，目的就是为了以后操作数据要去myhreo表中。


//导出model模块
const Blog_Config = module.exports = mongoose.model('blog_config',blogConfigSchema);
