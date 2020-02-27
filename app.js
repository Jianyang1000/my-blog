const express = require('express')

const article = require('./router/article')
const dashboard = require('./router/dashboard')
const user = require('./router/user')
const tag_category = require('./router/tag_category')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',dashboard)
app.use('/api',article)
app.use('/api',user)
app.use('/api',tag_category)

app.listen(port,() => {
    console.log(`正在监听${port}端口`)
})