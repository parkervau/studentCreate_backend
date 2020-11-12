'use strict'

const Koa = require("koa")
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

const router = require('./router')()


module.exports = () => {
    const app = new Koa()
    app.use(cors())
    app.use(bodyParser())
    app.use(router.routes())
    return app
}
