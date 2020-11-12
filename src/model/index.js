'use strict'

const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/be_test1`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});
