var utils=require('../../config/utils.js');
var jwt = require('jwt-simple');
var User = require('./UserModel.js');
module.exports = {
  signin: function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.find({username:username},function(err,data){
      if(err){
        res.json(err)
      }
      else{
        
        if(data.length===0){
          res.json("username wrong")
        }
        else{
          console.log(data[0].password)
          utils.comparePass(password,data[0].password,function(ok){
            if(ok){
              var token=jwt.encode(data[0],'user');
              res.json({token:token, id:data[0]._id})
            }
            else{
              res.json("password wrong")
            }
          })
        
        }
      }
    })
  },
  signup: function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var email=req.body.email;
    var image = '../image/user-man.png';
     utils.hashpass(password,function(hash){
             password=hash});
   
     User.find({username:username},function(err,data){
      if(err){
        res.json(err)
      }
      else{
        if(data.length===0){
            User.find({email:email},function(err,data){
              if(err){
                res.json(err)
              }
              else{
                if(data.length===0){
                  User.create({username:username,password:password,email:email,image:image},function(err,data){
            if(err){
              res.json(err)
            }
            else{
              res.json(data)
            }
          })
                }
                else{
                  res.json("email already exist")
                }
              }
            })
        }else{
          res.json("user already exist")
        }
      }
     })
    // check to see if user already exists
   
  },
  getUser :function (req,res) {
    var userId = req.body._id;
     User.findOne({id:userId},function(err,data){
      if (err) {
        throw err
      }
      console.log(data)
      res.json(data)
     })
  }
};

