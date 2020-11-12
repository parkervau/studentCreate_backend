'use strict'

const Router = require("koa-router")

const checkDuplicate = require('./middleware/checkDuplicate')

const studentController = require('./controller/student/index')

module.exports = () => {
    const router = new Router()

    router.post("/studentcreate", checkDuplicate, studentController.createStudent)

    return router
}