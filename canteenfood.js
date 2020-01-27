var express = require('express');
var router =express.Router();
var passport =require('passpost');
var bcrypt =require('bcryptjs');

//Get Users model
var user=require('../model/user');
/*
GET register
/*{router.get('/register',function(req,res){
    res.render()
}
}