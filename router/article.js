//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const Article = require("../models/article");

router.get('/article',(request,response) => {
    Article.find({})
        .sort({ update_at: -1 })
        .then(articles => {
            response.json(articles);
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
    console.log(req.body)
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


router.post("/article", (request, response) => {
    Article.create(request.body, (err, hero) => {
        if (err) {
            response.json(err);
        } else {
            response.json(hero);
        }
    });
});

router.delete("/hero/:id", (request, response) => {
    Article.findOneAndRemove({
        _id: request.params.id
    })
        .then(article => res.send(`${article.title}删除成功`))
        .catch(err => res.json(err));
});




module.exports = router;