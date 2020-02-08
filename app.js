const express = require('express')

const router = require('./router/hero')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',router)


app.listen(port,() => {
    console.log(`正在监听${port}端口`)
})