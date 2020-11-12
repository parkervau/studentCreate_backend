'use strict'

const mongoose = require('mongoose')
const StudentSignup = require('../model/StudentSignup')

module.exports = async function checkDuplicate(ctx, next) {
    const {body} = ctx.request
    try {
        const isDuplicate = await StudentSignup.find({username: body.username})
        console.log(isDuplicate )

        if (isDuplicate.length !== 0) {
            ctx.body = {
                message: "username exists"
            }
            ctx.status = 422
            return
        }
        
    } catch (e) {
        ctx.body = {
            message: e.message
        }
        ctx.status = 400
        return
    }
    await next()
}