/*jslint node: true, stupid: true */
'use strict';
var fs = require('fs');

var userController = require('../controllers/history'),
	laterController = require('../controllers/later'),
	router = function(server) {
    /*fs.readdirSync('./routes').forEach(function (file) {
      if (file.substr(-3, 3) === '.js' && file !== 'index.js') {
        require('./' + file.replace('.js', ''))(server);
      }
    });*/
	function respond(req, res, next) {
	    res.send('API server working :)');
	}

	server.get('/', respond);
	server.get('/getHistory/:user_email', userController.ListByIP);
	server.post('/addHistory', userController.Add);
	server.get('/laterVideo/:user_email', laterController.GetLaterVideo);
	server.post('/addlaterVideo', laterController.AddLater);
};

module.exports = router;
