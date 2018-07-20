var restful = require('node-restful');
var mongoose = restful.mongoose;

var statusSchema = new mongoose.Schema({
    _id:Number,
    phone_number:String,
    token:String
});

module.exports=restful.model('Users',statusSchema);
