//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const Article = require("../models/article");

const qiniu = require('qiniu')

/*
* 获取未被删除、未加密的文章列表 客户端
* */
router.get('/article',(request,response) => {
    Article.find({status:0,is_encrypt: 0})
        .sort({ created_time: -1 })
        .then(articles => {
            response.json({
                code: 20000,
                data: articles
            });
        })
        .catch(err => {
            response.json(err);
        });
})

router.get('/article:id',(request,response) => {
    Article.findById(request.params.id)
        .then((article) => {
            response.json(article)
        })
        .catch((error) => {
            response.json(error)
        })
})

// 获取没有删除的文章
router.get('/manage_article',(request,response) => {
    const authorization = request.get('authorization')
    if(!authorization)
    {
        response.json({
            code: 50014,
            message: '登陆状态已经过期'
        })
    }
    Article.find({status: 0})
        .then((articles) => {
            response.json({
                data:articles,
                code:20000
            })
        })
        .catch((error) => {
            response.json(error)
        })
})

// 获取删除了的文章
router.get('/delete_article',(request,response) => {
    Article.find({status: 1})
        .then((articles) => {
            response.json({
                data: articles,
                code:20000
            })
        })
        .catch((error) => {
            response.json(error)
        })
})


//更新一条英雄信息数据路由
router.put("/article/:id", (req, res) => {
    Hero.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                name: req.body.name,
                age: req.body.age,
                sex: req.body.sex,
                address: req.body.address,
            }
        },
        {
            new: true
        }
    )
        .then(hero => res.json(hero))
        .catch(err => res.json(err));
});

// 发布文章
router.post("/publish_article", (request, response) => {
    const data = request.body
    const articleBaseInfo = {
        created_time: new Date(),
        delete_time: '',
        updated_time: ''
    }
    const articleInfo = Object.assign(data,articleBaseInfo)
    console.log(articleInfo);
    Article.create(articleInfo, (error, article) => {
        if (error) {
            response.json(error);
        } else {
            response.json({
                code: 20000,
                data: article
            });
        }
    });
});

// 删除文章
router.get("/delete_article/:id", (request, response) => {
    Article.findOneAndRemove({
        _id: request.params.id
    })
        .then(article => response.json({
            code: 20000,
            data: article
        }))
        .catch(err => response.json(err));
});



// 获取文章详情
router.get("/article_detail/:id",(request, response) => {
    Article.find({
        _id: request.params.id
    })
        .then((article) => {
            response.json({
                code: 20000,
                data: article
            })
        })
        .catch((error) => {
            response.json(error)
        })
})

router.get('/qiniu_token',(request, response) => {
    let accessKey = '9zMRpUgazU_jd9Jpq3Cel3fyFF7D5xAp_KlOpqd7';
    let secretKey = 'aFi5jH7EXqffyILnGKwjvYMOCl1IG7n1ww_P0voK';
    let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    let bucket = 'liujianyang-blog'
    let options = {
        scope: bucket,
    };
    let putPolicy = new qiniu.rs.PutPolicy(options);
    let uploadToken=putPolicy.uploadToken(mac);
    response.json({
        code: 20000,
        data: {token:uploadToken}
    })
})

// 更新文章
router.post("/article_edit", (request, response) => {
    const data = request.body
    Article.findOneAndUpdate(
        {_id: request.params.id},
        {
            $set: {
                title: request.body.title,
                tag: request.body.tag,
                cover: request.body.cover,
                sub_message: request.body.sub_message,
                is_encrypt: request.body.is_encrypt,
                content: request.body.content,
                html_content: request.body.html_content,
                category: request.body.category
            }
        },
        {
            new: true
        }
    )
});

module.exports = router;