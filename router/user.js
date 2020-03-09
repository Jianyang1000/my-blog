//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const User = require("../models/user");

router.get('/user',(request,response) => {
    const authorization = request.get('authorization')
    if (!authorization) {
        response.json({
            code: 50014,
            message: '登陆状态已经过期'
        })
    }
    User.find({})
        .then((users) => {
            response.json({
                data: users,
                code: 20000
            })
        })
        .catch((error) => {
            console.log(error);
        })
})


router.post('/user/login',(request,response) => {
    console.log(1123)
    User.find(request.body)
        .then(user => {
            if(user.length > 0) {
                response.json({
                    code: 20000,
                    message:'登陆成功',
                    data: {token: `admin-token-${user[0].username}-${new Date().getTime() + 60*60*1000*48}`}
                })
            }
            else {
                response.json({
                    code: 60204,
                    message:'账号或密码错误！',
                })
            }
        })
        .catch(error => {
            response.json(error);
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

router.delete('/user/:id',(request,response) => {
    User.findOneAndRemove({
        _id: request.params.id
    })
        .then((user) => {
            response.json({
                code:20000,
                data: user
            })
        })
        .catch((error) => {
            response.json(error)
        })
})

router.put('/user/:id',(request,response) => {
    User.findOneAndUpdate({
        _id: request.params.id
    },{
        $set: {
            username: request.body.username,
            email: request.body.email,
            introduce: request.body.introduce
        }
    },{
        new: true
    })
        .then((user) => {
            console.log(user);
            response.json({
                code: 20000,
                data: user
            })
        })
        .catch((error) => {
            response.json(error)
        })
})

router.post('/user', (request,response) => {
    const data = request.body
    const userBaseInfo = {
        created_time: new Date().getTime(),
        access_token: ''
    }
    const userInfo = Object.assign(data,userBaseInfo)
    User.create(userInfo,(error,user) => {
        if(error){
            response.json(error)
        }
        else {
            response.json({
                data: user,
                code: 20000
            })
        }
    })
})


module.exports = router;