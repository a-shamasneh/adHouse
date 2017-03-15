var Adv = require('./AdvModel.js');
module.exports = {
  Addserv:function(req,res){
    console.log(req.body)
    console.log("im here")
  	var category=req.body.ad_cat;
  	var location=req.body.ad_loc;
    var desc=req.body.ad_desc;
    var phone=req.body.ad_phone;
    var img=req.body.ad_img;
    var Uid=req.body.ad_uid;
    var approve=false;
     console.log(req.body)
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
  }
};
