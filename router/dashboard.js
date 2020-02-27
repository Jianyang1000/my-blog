//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const User = require("../models/user");
const Comment = require('../models/comment')
const Tag = require('../models/tag')
const Category = require('../models/category')
const Article = require('../models/article')

router.get("/dashboard", (request, response) => {
    const authorization = request.get('authorization')
    if(!authorization)
    {
        response.json({
            code: 50014,
            message: '登陆状态已经过期'
        })
    }
    Article.find({})
        .sort({update_at: -1})
        .then(articles => {
            response.json({
                data:{articles:articles},
                code: 20000
            });
        })
        .catch(err => {
            response.json(err);
        });
});

router.get('/dashboard/card_count',(resquest,response) => {
    let cardCount = []
    let userCount = User.find()
    console.log(userCount);


})



module.exports = router;