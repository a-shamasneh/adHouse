var mongo = require('mongoose');
var adverts= new mongo.Schema({
    ad_cat:String,
    ad_loc:String,
    ad_desc:String,
    ad_img:String,
    ad_date:{type:Date,default:Date.now},
    ad_approve:Boolean,
    ad_phone:String,
    ad_uid:{
       type: mongo.Schema.Types.ObjectId,
       ref: 'users'
   }
});
var adv = mongo.model('adverts',adverts)
module.exports=adv
