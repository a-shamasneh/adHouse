var express = require('express');
var mongoose = require('mongoose');
var app = express();

require('./server/config/middleware.js') (app,express); 
require('./server/config/routes.js') (app,express);
//=============================================================================
/*									Database								 */
//=============================================================================
	var mongoURI = 'mongodb://mais:1234@ds019866.mlab.com:19866/adhouse' ||'mongodb://localhost/test';
	mongoose.connect(mongoURI);
	db = mongoose.connection;

	db.once('open',function () {
		console.log('... mongoDB  adhouse is open');
	});
//=============================================================================
/*									Server   								 */
//=============================================================================
	var port = process.env.PORT || 3000;
	app.listen(port , function () {
		console.log('...Server now listening on port ' + port);
	});
module.exports = app;