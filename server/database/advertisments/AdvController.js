var Adv = require('./AdvModel.js');
module.exports = {
  Addserv:function(req,res){
  	var category=req.body.ad_cat;
  	var location=req.body.ad_loc;
    var desc=req.body.ad_desc;
    var phone=req.body.ad_phone;
    var img=req.body.ad_img;
    var Uid=req.body.ad_uid;
    var approve=0;
    var date=new Date().toUTCString().substr(0,16);
    Adv.create({
      ad_cat:category,
      ad_loc:location,
      ad_desc:desc,
      ad_img:img,
      ad_approve:approve,
      ad_phone:phone,
      ad_uid:Uid,
    },function(err,ok){
       if(err){
          res.json(err);
        }
       
      else{
        res.json("Your Add has been uploaded waiting for approve")
      }

    })
  },
  // get advs
  getall:function(req,res){
    Adv.find({},function(err,adds){
      if(err){
        res.json(err)
      }else{
        res.json(adds)
      }

    })
  },
  getAllById:function(req,res){
    var userId = req.body._id;
     Adv.find({id:userId},function(err,data){
        if (err) {
          throw err
        }
        console.log(data)
        res.json(data)
       })
  },
 
  /////////admin////////
  GetAdmin:function(req,res){
    Adv.find({ad_approve:{$eq:0}},function(err,data){
        if (err) {
          throw err
        }else{


            res.json(data)
        }
        
      
       })
  },
  /// reject///
    Reject:function(req,res){
      console.log(req.body.id)
       // res.json("Reject")
       Adv.remove({_id:req.body.id},function(err,ok){
        if(err){
          res.json(err)
        }
        else{
          res.json("deleted succesfully!!")
        }
       })

    },

  ///////
  ///approve//
  Approve:function(req,res){
      console.log(req.body.id)
      // res.json("approve")
      Adv.update(
        {_id:req.body.id},{ad_approve:1},function(err,ok){
          if(err){
            res.json(err)
          }
          else{
            res.json("approved succeesfully!!")
          }
      })
    }
  ////


};
