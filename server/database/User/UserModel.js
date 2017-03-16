var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  username:String,
  password: String,
  email:String,
  date:String,
  image: String,
  Admin:Boolean,

});



module.exports = mongoose.model('users', UserSchema);
