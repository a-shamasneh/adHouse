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
          utils.comparePass(password,data[0].password,function(ok){
            if(ok){
              var token=jwt.encode(data[0],'user');
              res.json({token:token, id:data[0]._id,Admin:data[0].admin})
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
    var image ='http://www.careerpilot.org.uk/images/profile-icon-lrg.png';
    var admin=true;
    var date=new Date().toUTCString().substr(0,16);
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
                  User.create({username:username,password:password,email:email,image:image,Admin:admin,date:date},function(err,data){
            if(err){
              res.json(err)
            }
            else{
              var ok="ok"
              res.json({ok:ok})
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
    console.log(req.params)
    var userId = JSON.parse(req.params._id);
     User.findOne({_id:userId},function(err,data){
      if (err) {
        throw err
      }
      console.log(data)
      res.json(data)
     })
  },
  changImage: function (req,res) {
    // console.log(req.body)
    if (req.body.image === undefined || req.body.image === null) {
    var image ='http://www.careerpilot.org.uk/images/profile-icon-lrg.png';
    }
    else {
      var image = req.body.image ;
    }
        User.update(
        {_id:req.body._id},{image:image},function(err,ok){
          if(err){
            res.json(err)
          }
          else{
            res.json("changed image  succeesfully!!")
          }
      })
  }
};

