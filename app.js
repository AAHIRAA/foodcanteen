var express = require('express');
var app = express();

const bodyparser= require('body-parser') ;
app.use(bodyparser.urlencoded({extended :false}));
app.use(bodyparser.json());
 
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/emisha", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

var x = require('./src/routes');



app.use('/xyz', x);
module.exports = app
