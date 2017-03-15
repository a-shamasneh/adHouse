var Adv = require('./AdvModel.js');
module.exports = {
  Addserv:function(req,res){
  	var category=req.body.ad_cat;
  	var location=req.body.ad_loc;
    var desc=req.body.ad_desc;
    var phone=req.body.ad_phone;
    var img=req.body.ad_img;
    var Uid=req.body.ad_uid;
    var approve=false;
    var date=new Date().toUTCString().substr(0,16);
    Adv.create({
    ad_cat:category,
    ad_loc:location,
    ad_desc:desc,
    ad_img:img,
    ad_approve:approve,
    ad_phone:phone,
    ad_uid:Uid,
    ad_date:date,
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
