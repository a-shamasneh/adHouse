var Comment = require('./CommentModel.js');
module.exports = {
	insertComment : function (req,res) {
		console.log(req.body)
		var userId = req.body.userId ;
		var advId = req.body.advId ;
		var text = req.body.text ;
		 Comment.create ({
			userId :userId ,
			advId :advId ,
			text :text 
		},function (err,data) {
			if (err) {
				throw err ;
			}
			else{
				console.log("insert successfuly");
				res.json(data);
			}
		})
	},
	getCommentsById : function (req , res) {
		console.log(req.params)
		 Comment.find({advId:req.params.advId},function(err,data){
   		   if(err){
        	res.json(err)
      	   }else{
      	   	console.log('retrived successfuly !')
        	res.json(data)
      	   }
    	})
	},
	editComment: function (req,res) {
		console.log(req.body)
	   Comment.update({_id:req.body._id},{text:req.body.text},function(err,data){
      		if(err){
        		res.json(err)
      		}
      		else{
      			console.log('edit successfuly !')
        		res.json(data)
      		}
  	  })
	},
	removeCommentById: function (req,res) {
		console.log(req.params)
       Comment.remove({_id:req.params._id},function(err,data){
          if(err){
           res.json(err)
          }
          else{
          	console.log('done !!!')
            res.json(data)
          }
       })
	} 
}