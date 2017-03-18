var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
		userId:{type: mongoose.Schema.Types.ObjectId,
       	   ref: 'users'},
         advId:{type: mongoose.Schema.Types.ObjectId,
           ref: 'adverts'},
         text:String
});
module.exports = mongoose.model('Comment', CommentSchema);
