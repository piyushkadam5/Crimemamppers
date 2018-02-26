var express = require('express');
var express_validator = require('express-validator');

var router = express.Router();

router.use(express_validator());

const Policestation = require('../model/policestation');

router.get('/police',function(req,res){
    Policestation.getAllPoliceStations((err,stations)=>{
        if(err){
            res.json(err);
        }else{
            res.json(stations);
        }
    });
});
router.post('/login',function(req,res){
        Policestation.getUserByName(req.body,function(
            err,user
        ){
            if(err){
                res.json(err);
            }
            if(!user){
                res.json({message:'no user present'});
            }
            res.json({message:'goodtogo',latitude:user.location.latitude,
        longitude:user.location.longitude,landline:user.phone});
        });   
   
});
router.post('/police',function(req,res){
    req.checkBody('location.latitude','latitude is required')
    .notEmpty();
    req.checkBody('location.longitude','longitude is requied')
    .notEmpty();
    var errors = req.validationErrors();
    if(errors){
        res.json(errors);
    }else{
        let station = new Policestation({
            area : req.body.area,
            phone : req.body.phone,
            password : req.body.password,
            location :{
                latitude : req.body.location.latitude,
                longitude : req.body.location.longitude
            }
        });
        station.save(function(err,stations1){
            if(err){
                res.json(err);
            }else{
                if(!stations1){
                    res.json({message:'not able to create police station'});
                }
                res.json({message:'filedcomplaint'});
            }
        });
    }
});
module.exports = router;