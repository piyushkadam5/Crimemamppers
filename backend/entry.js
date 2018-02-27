var express = require('express');
var BodyParser  = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();

const route = require('./route/route');
const crimeroute = require('./route/crimeroute');
const policeroute = require('./route/policeroute');

mongoose.connect('mongodb://localhost:27017/crimemappers');
mongoose.connection.on('connected',()=>{
    console.log('connected to database');
});

mongoose.connection.on('error',(err)=>{
    console.log(err);
});

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Connected');
});

app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:false}));

app.use('/user',route);
app.use('/crime',crimeroute);
app.use('/police',policeroute);

app.listen(PORT,function(){
    console.log('listening');
});
