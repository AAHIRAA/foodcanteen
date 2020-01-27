 var http = require('http');
var port = 3000;

var app= require('./app');
var server = http.createServer(app);
server.listen(port);

console.log("server started and listening on 3000");

const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: {
        type: String
    },
   password: {
       type: String
   }
    },  
 { collection: 'users', timestamps: true });

module.exports = mongoose.model('users', UserSchema);
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
var express = require('express');
var router = express.Router();

var user = require('./user');

router.get('/hello', function(req, res, next) {
    res.status(200).json({
        message: "canteen food",
        data: {
           name: "Swati Prajwoleeka",
    
           author: "Swati and Rohit"
        }
    });
});

router.post('/byebye', function(req, res, next) {
    let reqBody = req.body;
    let userObj = {
        name: reqBody.name,
        food: reqBody.food,
    };
    const savedUser = new user(userObj);
    savedUser.save();
    res.status(404).json(savedUser);
});

router.get('/byebye', function(req, res, next) {
    user.find().then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        res.status(404).json({
            message: "No data found"
        })
    });
});

module.exports = router;
