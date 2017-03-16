var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  username:String,
  password: String,
  email:String,
  date:{type:Date,default:Date.now},
  image: { data: Buffer, contentType: String }

});



module.exports = mongoose.model('users', UserSchema);
