

var mongoose = require('mongoose');

const Schema = mongoose.Schema({
    widthn:{type:Number},
    widthp:{type:Number},
    area :{type:String},
    landline:{type:String},
    username:{
        type : String,
        required : true
    },
    typeofcrime:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required: true
    },
    description:{
        type:String,
        reuired:true
    },
    location:{
        latitude:{
            type:Number,
            required:true
        },
        longitude:{
            type:Number,
            required:true
        }
    }
});
const crimeSchema = module.exports = mongoose.model(
    'crimeSchema' , Schema , 'crimeSchema'
);

module.exports.getAllCrimes = function(
    callback
){
    crimeSchema.find(callback);
}

module.exports.updateCrime = function(id,crime,options,callback){
    var quer = {_id:id};
    var update ={
        widthn:crime.widthn,
        widthp:crime.widthp,
        area : crime.area,
        landline : crime.landline,
        username : crime.username,
        typeofcrime: crime.typeofcrime,
        name : crime.name,
        phone : crime.phone,
        description : crime.description,
        location :{
            latitude : crime.location.latitude,
            longitude : crime.location.longitude
        }
    }
    crimeSchema.findOneAndUpdate(quer,update,options,callback);
}