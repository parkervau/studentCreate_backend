'use strict'

const mongoose = require('mongoose')

const SignupSchema = {
    username: String,
    email: String,
    password: String,
} 

module.exports = mongoose.model("StudentSignup", SignupSchema)