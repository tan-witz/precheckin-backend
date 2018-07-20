var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://precheckin1:xxyyzz1234@ds143461.mlab.com:43461/checklocation') ;

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api',require('./routes/api'));
app.listen(1000);
console.log('Server is running on port 1000');



