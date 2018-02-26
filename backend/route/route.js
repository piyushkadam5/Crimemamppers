var express = require('express');
var expressValidator = require('express-validator');

var router = express.Router();

router.use(expressValidator());

const UserSchema = require('../model/user');

router.get('/user',(req,res)=>{
    
    UserSchema.find((err,UserSchema)=>{
        if(err){
            res.json(err);
        }else{
            res.json(UserSchema);
        }
    });
});
router.post('/signup',function(req,res){
    req.checkBody('username','username is required').notEmpty();
    req.checkBody('password','passsword is required').notEmpty();
    req.checkBody('email','email id is required').notEmpty().isEmail();
    req.checkBody('phone','phone number is required').notEmpty();

    var errorss = req.validationErrors();
    if(errorss){
        res.json(errorss);
    }
    else{
        let users = new UserSchema({
           username: req.body.username,
           password:req.body.password,
          phone:  req.body.phone,
          email:req.body.email
        });
        users.save(function(err,users1){
            if(err){
                res.json(err);
            }
            else{
                if(!users1){
                    res.json({message:'notable'});
                }
                res.json({message:'Goodtogo'});
            }
        });
    }
})
router.post('/login',function(req,res){
    
    req.checkBody('username','username is required').notEmpty();
    req.checkBody('password','password is required').notEmpty();

    var errors = req.validationErrors();
    if(errors){
        res.json(errors);
    }
    else{
        /*UserSchema.find({username:req.body.username,password:req.body.password},(err,useee)=>{
            if(err){
                res.json(err);
            }
            else{
                res.redirect('/');
                
            }
        });*/
        UserSchema.getUserByName(req.body,function(
            err,user
        ){
            if(err){
                res.json(err);
            }
            if(!user){
                res.json({message:'no user present'});
            }
            res.json({message:'goodtogo'});
        });
}
});
module.exports = router;