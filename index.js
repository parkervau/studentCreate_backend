'use strict';

// create Koa's application
const app = require('./src/app')()
// connect to database
require('./src/model/index')

app.listen(3001, () => {
    console.log("Server start at: 3001")
})