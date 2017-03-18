var UserController = require ('../database/User/UserController.js');
var AdvController = require ('../database/advertisments/AdvController.js');
module.exports = function (app, express) {
/*								Advertisment route									 */
//=============================================================================
		app.post('/api/addserv',AdvController.Addserv);
		app.get('/api/adds/getall',AdvController.getall);
		app.get('/api/adds/:userID',AdvController.getAllById);
		app.get('/api/adds/admin/adminGetall',AdvController.Gadmin);
		app.post('/api/adds/appr',AdvController.Approve);
		app.post('/api/adds/reject',AdvController.Reject);

	
	
/*								user route									 */
//=============================================================================

		app.post('/api/signin', UserController.signin);
		app.post('/api/signup',UserController.signup);
		app.get('/api/getUser/:_id',UserController.getUser);
		app.post('/api/changImage',UserController.changImage);
		


		
};

