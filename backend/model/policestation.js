var mongoose = require('mongoose');

const schema = mongoose.Schema({
    area:{
        type : String,
        required : true
    },
    
    phone:{
        type:String,
        required: true
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
    },

    password:{
        type:String,
        required:true
    }
});

const Policestation = module.exports = mongoose.model('Policestation' , schema , 'Policestation');

module.exports.getAllPoliceStations = function(callback){
    Policestation.find(callback);
}

module.exports.getUserByName = function(user,callback){
    var query = {area:user.username,password:user.password};
    Policestation.findOne(query,callback);
}
