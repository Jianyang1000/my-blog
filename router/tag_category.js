//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const Tag = require("../models/tag");
const Category = require('../models/category')

/*
* 服务端获取标签
* */
router.get('/tag', (request, response) => {

    const authorization = request.get('authorization')
    if (!authorization) {
        response.json({
            code: 50014,
            message: '登陆状态已经过期'
        })
    }
    Tag.find({})
        .sort({update_at: -1})
        .then(Tags => {
            response.json({
                data: Tags,
                code: 20000
            });
        })
        .catch(err => {
            response.json(err);
        });
})

/*
* 服务端获取分类
* */

router.get('/category', (request, response) => {
    const authorization = request.get('authorization')
    if (!authorization) {
        response.json({
            code: 50014,
            message: '登陆状态已经过期'
        })
    }
    Category.find({})
        .sort({update_at: -1})
        .then(Categories => {
            response.json({
                data: Categories,
                code: 20000
            });
        })
        .catch(err => {
            response.json(err);
        });
})


/*
* 客户端获取标签
* */
router.get('/blog_tag', (request, response) => {
    Tag.find({})
        .sort({update_at: -1})
        .then(Tags => {
            response.json({
                data: Tags,
                code: 20000
            });
        })
        .catch(err => {
            response.json(err);
        });
})

/*
* 客户端获取分类
* */

router.get('/blog_category', (request, response) => {
    Category.find({})
        .sort({update_at: -1})
        .then(Categories => {
            response.json({
                data: Categories,
                code: 20000
            });
        })
        .catch(err => {
            response.json(err);
        });
})


router.post('/tag', (request, response) => {
    console.log('post enter')
    const data = request.body
    const tagBaseInfo = {
        created_time: new Date().getTime(),
        tag_count: 0
    }
    const tagInfo = Object.assign(data, tagBaseInfo)
    Tag.create(tagInfo, (error, tag) => {
        if (error) {
            response.json(error)
        } else {
            response.json({
                code: 20000,
                data: tag
            })
        }
    })
})

router.post('/category', (request, response) => {
    const data = request.body
    const categoryBaseInfo = {
        created_time: new Date().getTime(),
        category_count: 0
    }
    const categoryInfo = Object.assign(data, categoryBaseInfo)
    Category.create(categoryInfo, (error, category) => {
        if (error) {
            response.json(error)
        } else {
            response.json({
                code: 20000,
                data: category
            })
        }
    })
})

router.put('/category/:id', (request, response) => {
    Category.findOneAndUpdate(
        {_id: request.params.id},
        {
            $set: {
                name: request.body.name,
            }
        },
        {
            new: true
        })
        .then((category) => {
            response.json({
                data: category,
                code: 20000
            })
        })
        .catch((error) => {
            response.json(error)
        })
})

router.put('/tag/:id', (request, response) => {
    Tag.findOneAndUpdate(
        {_id: request.params.id},
        {
            $set: {
                name: request.body.name,
            }
        },
        {
            new: true
        })
        .then((Tag) => {
            response.json({
                data: Tag,
                code: 20000
            })
        })
        .catch((error) => {
            response.json(error)
        })
})

router.delete('/category/:id', (request, response) => {
    console.log(request.params.id);
    Category.findOneAndRemove({
        _id: request.params.id
    })
        .then((category) => {
            response.json({
                data: category,
                code: 20000
            })
        })
        .catch((error) => {
            response.json(error)
        });
})

router.delete('/tag/:id', (request, response) => {
    Tag.findOneAndRemove({
        _id: request.params.id
    })
        .then((tag) => {
            response.json({
                data: tag,
                code: 20000
            })
        })
        .catch(error => response.json(error));
})


module.exports = router;