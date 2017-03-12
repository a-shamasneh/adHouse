var UserController = require ('../database/User/UserController.js');
var AdvController = require ('../database/advertisments/AdvController.js');
module.exports = function (app, express) {
/*								user route									 */
//=============================================================================
		app.post('/api/addserv',AdvController.Addserv);
		app.post('/api/:username', UserController.getuserByUserName);
		app.post('/api/signup',UserController.signupUser);

		
};

