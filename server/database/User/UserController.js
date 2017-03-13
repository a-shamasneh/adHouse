var jwt = require('jwt-simple');
var User = require('./UserModel.js');
module.exports = {
  signin: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

  },

  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var email=req.body.email;
     console.log(req.body)
    // check to see if user already exists
   
  },

  
};
