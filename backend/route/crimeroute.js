var express = require('express');
var expressValidator = require('express-validator');

var router = express.Router();

router.use(expressValidator());

const crimeSchema = require('../model/cime');

router.get('/crime',(req,res)=>{
    
    crimeSchema.getAllCrimes((err,crimes)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(crimes);
        }
    });
});

router.post('/crime',function(req,res){
    req.checkBody('user_id','username is required').notEmpty();
    req.checkBody('category','type of crime is required').notEmpty();
    req.checkBody('name','name is required').notEmpty();
    req.checkBody('phone','phone is required').notEmpty();
    req.checkBody('desc','desc is required').notEmpty();
    req.checkBody('location.latitude','latitude is required')
    .notEmpty();
    req.checkBody('location.longitude','longitude is requied')
    .notEmpty();

    var errors = req.validationErrors();
    if(errors){
        res.json(errors);
    }else{
        let complain = new crimeSchema({
            username : req.body.user_id,
            typeofcrime: req.body.category,
            name : req.body.name,
            phone : req.body.phone,
            description : req.body.desc,
            location :{
                latitude : req.body.location.latitude,
                longitude : req.body.location.longitude
            }
        });
        complain.save(function(err,complaint){
            if(err){
                res.json(err);
            }else{
                if(!complaint){
                    res.json({message:'asdasda'});
                }
                res.json({message:'filedcomplaint'});
            }
        });
    }
});
router.put('/crime/:_id',function(req,res){
    var id = req.params._id;
    var crime1 = req.body;
    crimeSchema.updateCrime(id,crime1,{},function(err,crime2){
        if(err){
            res.json(err);
        }
        res.json(crime2);
    });
});
module.exports = router;