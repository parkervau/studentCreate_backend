'use strict'

const StudentSignup = require('../../model/StudentSignup')

module.exports = async (ctx) => {
    const {body} = ctx.request
    console.log(body)
    const student = new StudentSignup(body)
    const {_id} = await student.save()

    ctx.status = 201
    ctx.body = {
        message: "student created",
        id: _id,
    }
}