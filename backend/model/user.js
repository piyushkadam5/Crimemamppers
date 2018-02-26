var mongoose = require('mongoose');

const Schema = mongoose.Schema({
    username :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    phone :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    }
});

const UserSchema = module.exports = mongoose.model(
'UserSchema' , Schema ,'UserSchema'
);


module.exports.getUserByName = function(user,callback){
    var query = {username:user.username,password:user.password};
    UserSchema.findOne(query,callback);
}
